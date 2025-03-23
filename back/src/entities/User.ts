import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";
import { UUID } from "crypto";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: 150 })
  name: string;

  @Column({ type: "varchar", unique: true, length: 200 })
  email: string;

  @Column({ type: "date", default: new Date() })
  birthdate: Date;

  @Column({ type: "int", unique: true })
  nDni: number;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialsId" })
  credentials: Credential;
}
