import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";
import { credentialRepository } from "../repositories/credential.repository";
import { userRepository } from "../repositories/user.repository";

export async function createCredentialService({
  username,
  password,
}: ICredential) {
  try {
    const newIdCredential = await credentialRepository.create({
      username: username,
      password: password,
    });
    await credentialRepository.save(newIdCredential);
    console.log(newIdCredential);

    return newIdCredential;
  } catch (error) {
    throw new Error("Error al guardar las credenciales");
  }
}

export async function correctUserPasswordService({
  username,
  password,
}: ICredential) {
  try {
    const correctUser: Credential | null = await AppDataSource.getRepository(
      Credential,
    ).findOne({ where: { username, password } });

    if (correctUser) {
      return correctUser.id;
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (error) {
    throw new Error("Error al verificar los credenciales");
  }
}
//En el servicio de credenciales:

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
