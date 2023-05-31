import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import groupRouter from './routes/groupRouter';
import studentRouter from './routes/studentRouter';
import errorMiddleware from './middlewares/error.middleware';

import mongoose from 'mongoose';


class App {
    private app: express.Application;

    public constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeErrorHandling();
        this.connectToDB();
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
        this.app.use('/api/', groupRouter);
        this.app.use('/api/', studentRouter);
    }

    private connectToDB(): void {
        mongoose.connect('mongodb://localhost:27017/mydatabase')
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch((error) => {
                console.error('Failed to connect to MongoDB', error);
            });
    }
}

export default App;
