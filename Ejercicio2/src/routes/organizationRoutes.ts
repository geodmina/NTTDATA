import { Router } from "express";
import { getOrganization, getOrganizations, postOrganization } from "../controllers/organizationControllers";

const organizationRoutes: Router = Router();

organizationRoutes.get("/", getOrganizations);
organizationRoutes.get("/:id", getOrganization);
organizationRoutes.post("/", postOrganization);

export default organizationRoutes;