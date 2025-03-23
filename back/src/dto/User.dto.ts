import { CitaDto } from "./Cita.dto";

export class UserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  appointments: CitaDto[];
  username: string;
  password: string;
}
