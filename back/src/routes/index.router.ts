import { Router } from "express";

import usersRouter from "./users.router";
import appointmentRouter from "./appointment.router";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointments", appointmentRouter);

export default router;
