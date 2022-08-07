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

export const getOrganization = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const organization = await Organization.findOne({ where: { id_organizacion: id } });

        if (organization === null) {
            res.status(204).json({
                msg: 'Organizacion no encontrada'
            });
        } else {

            res.json({
                organization
            });

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la actualizacion de organizacion'
        });
    }

}

export const postOrganization = async (req: Request, res: Response) => {

    try {

        const { body } = req;

        const organization = await Organization.create(body);

        res.json({
            organization
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en creacion de organizacion'
        });
    }

}

export const putOrganization = async (req: Request, res: Response) => {


    try {

        const { id } = req.params;
        const { body } = req;

        const organization = await Organization.findOne({ where: { id: id } });

        if (organization === null) {
            res.status(204).json({
                msg: 'Organizacion no encontrada'
            });
        } else {

            organization.update({
                name: body['name'],
                status: body['status']
            }).then((organization) => {
                res.json({
                    organization
                });
            }).catch((error) => {
                console.log(error);
                res.status(500).json({
                    msg: 'Error en la actualizacion de organizacion'
                });
            });

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la actualizacion de organizacion'
        });
    }

}