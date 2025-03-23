import { strict } from "assert";
import { IAppointment } from "./IAppointment";
import ICredential from "./ICredential";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  appointments: IAppointment[];
  credentialsId: ICredential["id"];
}

