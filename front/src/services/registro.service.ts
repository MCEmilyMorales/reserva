import { UsuarioNuevo } from "../schemas/usuarioNuevo.schema";
import { apiService } from "./index.service";

const PATH = "users/register/";

export const register = async (usuarioNuevo: UsuarioNuevo) => {
  try {
    const response = await apiService.post(`${PATH}`, usuarioNuevo);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`${error.message}`);
    }
    throw new Error(`Error desconocio al conectar el servicio.`);
  }
};
