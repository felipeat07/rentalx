import express from "express";

import swaggerUi from "swagger-ui-express"
import swargerFile from "./swagger.json"

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swargerFile))

app.use(router)

app.listen(3333, () => console.log("Servidor ON na porta 3333"));
