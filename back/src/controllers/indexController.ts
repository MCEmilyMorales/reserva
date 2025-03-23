//modificado!!!!!!!!!!!!!!hw3-jorgitoo
import { Request, Response } from "express";
import IUserIndex from "../interfaces/IUserIndex";
import {
  createUserService,
  getUserService,
  deleteUserService,
} from "../services/indexService";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser: IUserIndex = await createUserService({ name, email });
  res.status(201).json(newUser);
};

export const getUser = async (req: Request, res: Response) => {
  const users: IUserIndex[] = await getUserService();
  res.status(200).json(users);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteUserService(id);
  res.status(200).json({ message: "Eliminado correctamente" });
};
