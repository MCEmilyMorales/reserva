import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { credentialRepository } from "../repositories/credential.repository";

export async function createCredentialService({
  username,
  password,
}: Partial<Credential>) {
  try {
    const newIdCredential = credentialRepository.create({
      username: username,
      password: password,
    });
    await credentialRepository.save(newIdCredential);
    return newIdCredential;
  } catch (error) {
    throw new Error("Error al guardar las credenciales");
  }
}

export async function correctUserPasswordService({
  username,
  password,
}: Partial<Credential>) {
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
