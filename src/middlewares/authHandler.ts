import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import Err from '@shared/err';

interface TokenPayloadInterface {
    iat: number;
    exp: number;
    id: string;
}

export default function ensureAuthentication(
    request: Request,
    _response: Response,
    next: NextFunction,
): any {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Err('JWT token is missing', 401);
    }

    const [token] = authHeader.split(' ');

    try {
        const decoded = verify(token, process.env.JWT_SECRET || '');
        const { id } = <TokenPayloadInterface>decoded;
        request.user = {
            id,
        };
        return next();
    } catch {
        throw new Err('JWT is invalid', 401);
    }
}
