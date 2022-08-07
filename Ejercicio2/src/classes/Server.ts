import express, { Application } from 'express';
import organizationRoutes from '../routes/organizationRoutes';
import cors from 'cors';

import db from '../db/connection';
import Organization from '../models/organization';

class Server {

    private app: Application;
    private port: String;
    private apiPaths = {
        repository: '/api/organization'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8001';

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
                    console.log('Tabla Creada');
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