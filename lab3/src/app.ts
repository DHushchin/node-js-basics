import express from 'express';
import bodyParser from 'body-parser';
import 'ejs';

import config from './config';
import router from './routes/router';
import errorMiddleware from './middlewares/error.middleware';


class App {
    private app: express.Application;

    public constructor() {
        this.app = express();
        this.app.set('view engine', 'ejs');
        this.initializeMiddlewares();
        this.initializeErrorHandling();
        this.mountRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    public listen(): void {
        this.app.listen(config.get<number>('PORT'), () => {
            console.log(`App listening on the port ${config.get<number>('PORT')}`);
        });
    }

    private mountRoutes(): void {
        this.app.use('/', router);
    }
}

export default App;
