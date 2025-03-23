//modificado por mi

import { IFields } from "./IFields";
import { IUser } from "./IUser";

type THour = 17 | 18 | 19 | 20 | 21 | 22 | 23;
type TMinute = 0 | 30;
export enum Status {
  ACTIVE = "active",
  CANCELED = "cancelled",
}

export interface IAppointment {
  id?: number;
  date: Date;
  time: THour | TMinute;
  description: string;
  status: Status;
  userId: IUser["id"];
  serviceId: IFields[];
}
export class AppoinmentDto {
  date: Date;
  time: THour | TMinute;
  description: string;
  status: Status;
  userId: IUser["id"];
  serviceId: IFields[];
}
