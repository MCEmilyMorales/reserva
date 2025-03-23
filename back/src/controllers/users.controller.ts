import { Request, Response } from "express";
import {
  getUserService,
  getUserByIdService,
  postRegisterUserService,
  postLoginUserService,
} from "../services/user.service";
import { User } from "../entities/User";
import { UserDto } from "../dto/User.dto";

//? registrar nuevo usuario
export const postRegisterUserController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user: UserDto = req.body;
    const newUser = await postRegisterUserService(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Los datos son incorrectos." });
  }
};
//? Controlador para obtener todos los usuarios
export const getUserController = async (req: Request, res: Response) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ throw: Error("error al traer los usuarios.") });
  }
};

//? Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdService(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: `El usuario ${id} no fue encontrado` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario por ID" });
  }
};

//? Controlador para iniciar sesión de un usuario
export const postLoginUserController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credential = await postLoginUserService({ username, password });
    res.status(200).json(credential);
  } catch (error) {
    res.status(400).json({
      message: "Credenciales incorrectas.",
    });
  }
};
