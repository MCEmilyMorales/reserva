import "reflect-metadata";

import server from "./server";
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";

AppDataSource.initialize().then(() => {
  console.log("Conexion a la base de datos realizada con exito");
  server.listen(PORT, () => {
    console.log(`SERVIDOR escuchando el puerto ${PORT}`);
  });
});
