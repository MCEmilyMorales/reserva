//modificado!!!!!!!!!!!!!!hw3-jorgitoo

import { UserDto } from "../dto/UserDto";
import IUserIndex from "../interfaces/IUserIndex";

let users: IUserIndex[] = [];

let id: number = 1; //?provisorio

export const createUserService = async (userData: any): Promise<IUserIndex> => {
  const newUser: IUserIndex = {
    id,
    name: userData.name,
    email: userData.email,
    active: true,
  };
  users.push(newUser);
  id++;
  return newUser;

  // recibir los datos del usuario
  //crear un nuevo usuario
  //incluir el nuevo usuario dentro del arreglo y
  //vamos a retornar el objeto creado
};

export const getUserService = async (): Promise<IUserIndex[]> => {
  return users;
};

export const deleteUserService = async (id?: number): Promise<void> => {
  users = users.filter((user: IUserIndex) => {
    return user.id !== id;
  });
};
//*modificado por mi
