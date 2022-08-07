import { Router } from "express";
import { getOrganization, getOrganizations, postOrganization, putOrganization } from "../controllers/organizationControllers";

const organizationRoutes: Router = Router();

organizationRoutes.get("/", getOrganizations);
organizationRoutes.get("/:id", getOrganization);
organizationRoutes.post("/", postOrganization);
organizationRoutes.put("/:id", putOrganization);

export default organizationRoutes;