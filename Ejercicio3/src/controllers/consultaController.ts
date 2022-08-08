import { Request, Response } from "express";
import { Op } from "sequelize-cockroachdb";
import Metric from "../models/metric";
import Organization from "../models/organization";
import Repository from "../models/repository";
import Tribe from "../models/tribe";
const CsvParser = require("json2csv").Parser;

export const getConsulta = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const tribe = await Tribe.findOne({ where: { id_tribe: id } });

        if (tribe === null) {
            res.status(204).json({
                msg: 'Tribu no encontrada'
            });
        } else {

            const organization = await Organization.findOne({ where: { id_organization: tribe.get('id_organization') } });

            let whereMain: any = {};
            if (req.query.status) {
                whereMain.status = req.query.status
            }

            if (req.query.date) {
                whereMain.createdAt = {
                    [Op.gt]: new Date(req.query.date.toString())
                }
            }

            let whereInclude: any = {};
            let joinInclude: any = {
                model: Metric,
            };

            if (req.query.coverage) {
                whereInclude.coverage = {
                    [Op.gte]: Number(req.query.coverage)
                }
            }

            if (req.query.coverage) {
                joinInclude.where = whereInclude;
            }

            const repositories = await Repository.findAll({
                where: {
                    id_tribe: tribe.get('id_tribe'),
                    ...whereMain
                },
                include: [
                    joinInclude
                ]
            });

            let repositoriesMap: any = [];

            repositories.forEach(item => {

                let metric: any = item.get('Metric')

                repositoriesMap.push(
                    {
                        "id": item.get('id_repository'),
                        "name": item.get('name'),
                        "tribe": tribe.get('name'),
                        "organization": organization?.get('name'),
                        "coverage": metric['coverage'],
                        "codeSmells": metric['codeSmells'],
                        "bugs": metric['bugs'],
                        "vulnerabilities": metric['vulnerabilities'],
                        "hotspots": metric['hotspots'],
                        "state": item.get('state'),
                    });
            });

            res.json({
                repositories: repositoriesMap
            });

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la consulta de tribu'
        });
    }

}

export const getExportar = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const tribe = await Tribe.findOne({ where: { id_tribe: id } });

        if (tribe === null) {
            res.status(204).json({
                msg: 'Tribu no encontrada'
            });
        } else {

            const organization = await Organization.findOne({ where: { id_organization: tribe.get('id_organization') } });

            let whereMain: any = {};
            if (req.query.status) {
                whereMain.status = req.query.status
            }

            if (req.query.date) {
                whereMain.createdAt = {
                    [Op.gt]: new Date(req.query.date.toString())
                }
            }

            let whereInclude: any = {};
            let joinInclude: any = {
                model: Metric,
            };

            if (req.query.coverage) {
                whereInclude.coverage = {
                    [Op.gte]: Number(req.query.coverage)
                }
            }

            if (req.query.coverage) {
                joinInclude.where = whereInclude;
            }

            const repositories = await Repository.findAll({
                where: {
                    id_tribe: tribe.get('id_tribe'),
                    ...whereMain
                },
                include: [
                    joinInclude
                ]
            });

            let repositoriesMap: any = [];

            repositories.forEach(item => {

                let metric: any = item.get('Metric')

                repositoriesMap.push(
                    {
                        "id": item.get('id_repository'),
                        "name": item.get('name'),
                        "tribe": tribe.get('name'),
                        "organization": organization?.get('name'),
                        "coverage": metric['coverage'],
                        "codeSmells": metric['code_smells'],
                        "bugs": metric['bugs'],
                        "vulnerabilities": metric['vulnerabilities'],
                        "hotspot": metric['hotspot'],
                        "state": item.get('state'),
                    });
            });

            const csvFields = ["id", "name", "tribe", "Publiorganizationshed", "coverage", "codeSmells", "bugs", "vulnerabilities", "hotspot", "state"];
            const csvParser = new CsvParser({ csvFields });
            const csvData = csvParser.parse(repositoriesMap);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");
            res.status(200).end(csvData);

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la consulta de tribu'
        });
    }

}