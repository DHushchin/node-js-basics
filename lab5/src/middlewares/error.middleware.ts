import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http-exception';

function errorMiddleware(
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    response.status(status).json({
        status,
        message,
    });

    next();
}

export default errorMiddleware;
