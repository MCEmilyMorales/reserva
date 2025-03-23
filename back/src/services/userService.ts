import {
  createCredentialService,
  correctUserPasswordService,
} from "./credentialService";

import ICredential from "../interfaces/ICredential";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { UserDto } from "../dto/UserDto";
import { log } from "console";
import { userRepository } from "../repositories/user.repository";
import { Credential } from "../entities/Credential";
import { UUID } from "crypto";

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
  try {
    const usersId = await userRepository.findOne({
      where: { id },
      relations: ["credentials", "appointments"],
    });
    return usersId;
  } catch (error) {
    throw new Error("Error inesperado al obtener usuarios por ID");
  }
};
//? Función para registrar un nuevo user
export const postRegisterUserService = async (
  userData: UserDto,
): Promise<Partial<User>> => {
  try {
    const newUser = new User();
    (newUser.name = userData.name),
      (newUser.email = userData.email),
      (newUser.birthdate = userData.birthdate),
      (newUser.nDni = userData.nDni),
      (newUser.appointments = []);

    await createCredentialService({
      username: userData.username,
      password: userData.password,
    });
    await userRepository.save(newUser);
    return newUser;
  } catch (error) {
    throw new Error("Up! ha ocurrido un error al registrar el usuario");
  }
};

//? Función para iniciar sesión de un user
export const postLoginUserService = async (credentials: ICredential) => {
  try {
    return await correctUserPasswordService(credentials);
  } catch (error) {
    throw new Error("Ha ocurrido un error al iniciar sesión");
  }
};

// En el servicio de usuarios:

// Implementar una función que pueda retornar el arreglo completo de usuarios. //! ok

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
