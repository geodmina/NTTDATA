import { Router } from "express";
import { getConsulta, getExportar } from "../controllers/consultaController";

const consultanRoutes: Router = Router();

consultanRoutes.get("/:id", getConsulta);
consultanRoutes.get("/exportar/:id", getExportar);

export default consultanRoutes;