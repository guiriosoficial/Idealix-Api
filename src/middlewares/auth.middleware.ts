import ErrorHandler from '@shared/error_handler';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
    iat: number;
    exp: number;
    id: string;
}
export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): any {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new ErrorHandler('JWT token is missing', 401);
    }
    const [token] = authHeader.split(' ');

    try {
        const decoded = verify(token, process.env.JWT_SECRET || '');
        const { id } = <ITokenPayload>decoded;
        request.user = {
            id,
        };
        return next();
    } catch {
        throw new ErrorHandler('JWT is invalid', 401);
    }
}