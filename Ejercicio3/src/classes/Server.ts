import express, { Application } from 'express';
import organizationRoutes from '../routes/organizationRoutes';
import cors from 'cors';

import db from '../db/connection';
import Organization from '../models/organization';
import Tribe from '../models/tribe';
import Repository from '../models/repository';
import Metric from '../models/metric';

class Server {

    private app: Application;
    private port: String;
    private apiPaths = {
        repository: '/api/organization'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8002';

        this.dbConnection();
        this.middlware();
        this.routes();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        })
    }

    routes() {

        this.app.use(this.apiPaths.repository, organizationRoutes)

    }

    middlware() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Conexion DB abierta');

            Organization.sync({
                force: true,
            })
                .then(function () {
                    console.log('Tabla Creada Organization');

                    return Organization.bulkCreate([
                        {
                            id_organization: 1,
                            name: 'Organizacion 1',
                            status: 1
                        }, {
                            id_organization: 2,
                            name: 'Organizacion 2',
                            status: 1
                        }, {
                            id_organization: 3,
                            name: 'Organizacion 3',
                            status: 1
                        }
                    ]);

                })
                .catch(function (err) {
                    console.error("error: " + err.message);
                    process.exit(1);
                });

            Tribe.sync({
                force: true,
            })
                .then(function () {
                    console.log('Tabla Creada Tribe');

                    return Tribe.bulkCreate([
                        {
                            id_tribe: 1,
                            id_organization: 1,
                            name: 'Tribu 1',
                            status: 1
                        }, {
                            id_tribe: 2,
                            id_organization: 2,
                            name: 'Tribu 2',
                            status: 1
                        }, {
                            id_tribe: 3,
                            id_organization: 3,
                            name: 'Tribu 3',
                            status: 1
                        }
                    ]);

                })
                .catch(function (err) {
                    console.error("error: " + err.message);
                    process.exit(1);
                });

            Repository.sync({
                force: true,
            })
                .then(function () {
                    console.log('Tabla Creada Repository');

                    return Repository.bulkCreate([
                        {
                            id_tribe: 1,
                            id_repository: 1,
                            name: 'Repositorio 1',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }, {
                            id_tribe: 1,
                            id_repository: 2,
                            name: 'Repositorio 2',
                            create_time: new Date(),
                            status: 'A',
                            state: 'D'
                        }, {
                            id_tribe: 1,
                            id_repository: 3,
                            name: 'Repositorio 3',
                            create_time: new Date(),
                            status: 'A',
                            state: 'A'
                        },
                        {
                            id_tribe: 2,
                            id_repository: 4,
                            name: 'Repositorio 4',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }, {
                            id_tribe: 2,
                            id_repository: 5,
                            name: 'Repositorio 5',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }, {
                            id_tribe: 2,
                            id_repository: 6,
                            name: 'Repositorio 6',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        },
                        {
                            id_tribe: 3,
                            id_repository: 7,
                            name: 'Repositorio 7',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }, {
                            id_tribe: 3,
                            id_repository: 8,
                            name: 'Repositorio 8',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }, {
                            id_tribe: 3,
                            id_repository: 9,
                            name: 'Repositorio 9',
                            create_time: new Date(),
                            status: 'A',
                            state: 'E'
                        }
                    ]);

                })
                .catch(function (err) {
                    console.error("error: " + err.message);
                    process.exit(1);
                });

            Metric.sync({
                force: true,
            })
                .then(function () {
                    console.log('Tabla Creada Metric');

                    return Metric.bulkCreate([
                        {
                            id_repository: 1,
                            coverage: 75.5,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 2,
                            coverage: 56.09,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 3,
                            coverage: 80,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 4,
                            coverage: 15.3,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 5,
                            coverage: 50,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 6,
                            coverage: 60.5,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 7,
                            coverage: 95.2,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 8,
                            coverage: 100,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },{
                            id_repository: 9,
                            coverage: 15.0,
                            bugs: 0,
                            vulnerabilities: 5,
                            hotspot: 3,
                            code_smells: 0
                        },
                    ]);

                })
                .catch(function (err) {
                    console.error("error: " + err.message);
                    process.exit(1);
                });

        } catch (error) {
            throw new Error('Error en conexion a DB ' + Error)
        }

    }

}

export default Server;