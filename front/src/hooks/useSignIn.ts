import { useState } from "react";
import signIn from "../services/signIn.service";

const useSignIn = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const postData = async (body) => {
    setLoading(true);

    try {
      const respuestaApi = await signIn(body);
      setData(respuestaApi);
      return respuestaApi;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    postData,
    data,
    error,
    loading,
  };
};

export default useSignIn;
