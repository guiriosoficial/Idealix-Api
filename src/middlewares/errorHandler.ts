import { NextFunction, Request, Response } from 'express';
import Err from '@shared/err';

export default function errorHandler(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
	if(err instanceof Err) {
        return res.status(err.statusCode).json({
            status: 'Error',
            message: err.message
        });
    }

    console.error(err);
    
    return res.status(500).json({
        status: 'Error',
        message: 'Internal Server Error!'
    });
}