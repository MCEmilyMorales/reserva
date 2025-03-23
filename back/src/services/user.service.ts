import {
  createCredentialService,
  correctUserPasswordService,
} from "./credential.service";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { UserDto } from "../dto/User.dto";
import { UsersRepository } from "../repositories/user.repository";
import { Credential } from "../entities/Credential";

//? Función para obtener todos los users
export const getUserService = async (): Promise<User[]> => {
  try {
    const users = await AppDataSource.getRepository(User).find();
    return users;
  } catch (error) {
    throw new Error("Error fatal al obtener todos los usuarios");
  }
};
//? Función para obtener un user por su ID
export const getUserByIdService = async (id: string): Promise<User | null> => {
  const userRepository = new UsersRepository();
  try {
    const usersId = await userRepository.findOneIdUser(id);
    return usersId;
  } catch (error) {
    throw new Error("Error inesperado al obtener usuarios por ID");
  }
};
//? Función para registrar un nuevo user
export const postRegisterUserService = async (
  userData: UserDto,
): Promise<Partial<User>> => {
  const userRepository = new UsersRepository();
  try {
    const { name, email, birthdate, nDni, username, password } = userData;

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.nDni = nDni;

    await createCredentialService({ username, password });
    await userRepository.guardar(newUser);
    return newUser;
  } catch (error) {
    throw new Error("Up! ha ocurrido un error al registrar el usuario");
  }
};

//? Función para iniciar sesión de un user
export const postLoginUserService = async (
  credentials: Partial<Credential>,
) => {
  try {
    const credenciales = await correctUserPasswordService(credentials);
    return credenciales;
  } catch (error) {
    throw new Error("Ha ocurrido un error al iniciar sesión");
  }
};
