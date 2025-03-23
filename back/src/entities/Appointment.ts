import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./User";
import { Status } from "../enum/status";

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  time: number;

  @Column({ type: "varchar", length: 250 })
  description: string;

  @Column({ type: "enum", enum: Status, default: Status.ACTIVE })
  status: Status;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;

  //   @PrimaryColumn()
  //   serviceId;
}
