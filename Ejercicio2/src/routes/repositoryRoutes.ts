import { Router } from "express";
import { getRepositories } from "../controllers/repositoryControllers";

const repositoryRoutes: Router = Router();

repositoryRoutes.get("/", getRepositories);

export default repositoryRoutes;