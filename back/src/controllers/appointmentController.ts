import { Request, Response } from "express";
import {
  getAppointmentService,
  getAppointmentByIdService,
  postScheduleAppointmentService,
  putAppointmentCancelService,
} from "../services/appointment.service";

export const getAppointmentController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const appointments = await getAppointmentService(userId as string);
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error al obtener citas:", error);
    res.status(404).json({ message: "Error, el turno no fue encontrado." });
  }
};
export const getAppointmentByIdController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const appointmentId = await getAppointmentByIdService(Number(id));
    if (appointmentId) {
      res.status(200).json(appointmentId);
    }
  } catch (error) {
    console.error("Error al obtener cita por ID:", error);
    res.status(404).json({ message: "El turno no fue encontrado." });
  }
};
export const postScheduleAppointmentController = async (
  req: Request,
  res: Response,
) => {
  try {
    const appointmentData = req.body;
    const newAppointment =
      await postScheduleAppointmentService(appointmentData);
    res.status(201).json({ data: newAppointment });
  } catch (error) {
    res.status(400).json({ message: "Disculpe, los datos son incorrectos." });
  }
};
export const putAppointmentCancelController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    console.log("ID de cita:", id);
    const canceledAppointment = await putAppointmentCancelService(Number(id));
    res.status(200).json({ canceledAppointment });
  } catch (error) {
    console.error("Error al cancelar cita:", error);
    res.status(404).json({
      message: "El turno no fue encontrado.",
    });
  }
};
