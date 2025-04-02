import axios from "axios";

const HOST = "http://localhost:3000/";

export const apiService = axios.create({
  baseURL: `${HOST}`,
});
