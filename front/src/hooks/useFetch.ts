import { useState } from "react";
import { register } from "../services/registro.service";
import { UsuarioNuevo } from "../schemas/registro.schema";
//debo recibir los datos del servidor y enviar los datos del servidor
//! por convesion en react los hooks personalizados comienzan con USE, para que react los reconozca
const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async (body: UsuarioNuevo) => {
    setLoading(true);
    setError(null);
    try {
      const respuestaApi = await register(body);
      setData(respuestaApi);
      return respuestaApi;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { postData, loading, error, data };
};

export default useFetch;
