import { IAppointment } from "../interfaces/IAppointment";

export class UserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  appointments: IAppointment[];
  username: string;
  password: string;
}
