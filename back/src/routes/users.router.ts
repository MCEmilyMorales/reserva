//*modificado por mi
import { Router } from "express";
import {
  getUserController,
  getUserByIdController,
  postRegisterUserController,
  postLoginUserController,
} from "../controllers/users.controller";

//conectamos a express
const usersRouter: Router = Router();

usersRouter.get("/", getUserController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", postRegisterUserController);
usersRouter.post("/login", postLoginUserController);

export default usersRouter;
