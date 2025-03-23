//*modificado por mi
import { Router } from "express";
import {
  getAppointmentController,
  getAppointmentByIdController,
  postScheduleAppointmentController,
  putAppointmentCancelController,
} from "../controllers/appointmentController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointmentController);
appointmentRouter.get("/:id", getAppointmentByIdController);
appointmentRouter.post("/schedule", postScheduleAppointmentController);
appointmentRouter.put("/cancel", putAppointmentCancelController);

export default appointmentRouter;
