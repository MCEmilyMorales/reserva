import { apiService } from "./index.service";

const PATH = "users/login/";

const signIn = async (body) => {
  try {
    const response = await apiService.post(`${PATH}`, body);
    console.log("🚨 :", response);

    return response.data;
  } catch (error) {
    console.log("🚨 :", error);

    if (error instanceof Error) {
      console.error(`${error.message}`);
    }
    throw new Error(`Error desconocido al conectar el servicio.`);
  }
};
export default signIn;
