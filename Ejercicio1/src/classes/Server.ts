import express, {Application} from 'express';
import repositoryRoutes from '../routes/repositoryRoutes';
import cors from 'cors';

class Server {

    private app: Application;
    private port: String;
    private apiPaths = {
        repository: '/api/repository'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlware();
        this.routes();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        })
    }

    routes() {

        this.app.use(this.apiPaths.repository, repositoryRoutes)

    }

    middlware() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

    }

}

export default Server;