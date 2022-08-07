import { Router } from "express";
import { getOrganizations } from "../controllers/organizationControllers";

const organizationRoutes: Router = Router();

organizationRoutes.get("/", getOrganizations);

export default organizationRoutes;