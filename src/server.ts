import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import routes from 'routes';
import ErrorHandler from '@shared/error_handler';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((request: Request, response: Response, next) => {
	throw new ErrorHandler('Not Found', 404);
})
app.use(errors());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
	if(err instanceof ErrorHandler) {
        return response.status(err.statusCode).json({
            status: 'Error',
            message: err.message
        });
    }

    console.error(err);
    
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error!'
    });
});

app.listen(4000, () => {
	console.log('🚀 Server started on http://localhost:4000  ');
});