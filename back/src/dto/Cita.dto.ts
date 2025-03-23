import { User } from "../entities/User";
import { Status } from "../enum/status";

type THour = 17 | 18 | 19 | 20 | 21 | 22 | 23;
type TMinute = 0 | 30;

export class CitaDto {
  date: Date;
  time: THour | TMinute;
  description: string;
  status: Status;
  userId: User["id"];
  campo: string;
}
