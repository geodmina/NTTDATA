import { Request, Response } from "express";
import Organization from "../models/organization";

export const getOrganizations = async (req: Request, res: Response) => {


    try {

        const organizations = await Organization.findAll();

        res.json({
            organizations: organizations
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la consulta de organizaciones'
        });
    }

}
