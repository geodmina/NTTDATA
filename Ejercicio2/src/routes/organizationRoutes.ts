import { Router } from "express";
import { getOrganization, getOrganizations } from "../controllers/organizationControllers";

const organizationRoutes: Router = Router();

organizationRoutes.get("/", getOrganizations);
organizationRoutes.get("/:id", getOrganization);

export default organizationRoutes;