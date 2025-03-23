import {
  AppoinmentDto,
  Status,
} from "../interfaces/IAppointment";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const getAppointmentService = async (
  userId: string
): Promise<Appointment[]> => {
  try {
    const appointments = await AppDataSource.getRepository(Appointment).find({
      where: userId ? { user: { id: userId } } : {},
      relations: ["user"],
    });
    if (appointments.length === 0) {
      throw new Error("Up, ocurrio un error");
    }
    return appointments;
  } catch (error) {
    throw new Error("Error al obtener las reservas");
  }
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  try {
    const appointment = await AppDataSource.getRepository(Appointment).findOne({
      where: { id },
    });
    return appointment;
  } catch (error) {
    throw new Error("Error al obtener la reserva por ID");
  }
};

export const postScheduleAppointmentService = async (
  appointmentData: AppoinmentDto
) => {
  try {
    //bd---unir mas tarde
    const user = await AppDataSource.getRepository(User).findOne({
      where: { id: appointmentData.userId },
    });
    if (!user) {
      throw new Error("Error fatal del servidor");
    }
    const appNecesario = {
      date: appointmentData.date,
      time: appointmentData.time,
      description: appointmentData.description,
    };
    const newAppointment = await AppDataSource.getRepository(Appointment).save({
      ...appNecesario,
      user,
    });
    if (!newAppointment) {
      throw new Error("Up, ocurrio un error al crear el turno");
    }
    return newAppointment;
  } catch (error) {
    throw new Error("Error al programar una nueva reserva");
  }
};

export const putAppointmentCancelService = async (id: number ) => {
  try {
    const appointmentCancel = await AppDataSource.getRepository(
      Appointment
    ).findOne({
      where: { id },
      relations: ["user"],
    });
    if (!appointmentCancel) {
      throw new Error("no funcaaa");
    }
    appointmentCancel.status = Status.CANCELED;
    const updateAppointment =
      await AppDataSource.getRepository(Appointment).save(appointmentCancel);
    if (!updateAppointment) {
      throw new Error("No se pudo actualizar la cita después de cancelarla.");
    }
    return updateAppointment;
  } catch (error: any) {
    throw new Error(error);
  }
};
