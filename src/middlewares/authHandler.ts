import Err from '@shared/err';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayloadInterface {
    iat: number;
    exp: number;
    id: string;
}

export default function ensureAuthentication(
    req: Request,
    _res: Response,
    next: NextFunction,
): any {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Err('JWT token is missing', 401);
    }

    const [token] = authHeader.split(' ');

    try {
        const decoded = verify(token, process.env.JWT_SECRET || '');
        const { id } = <TokenPayloadInterface>decoded;
        req.user = {
            id,
        };
        return next();
    } catch {
        throw new Err('JWT is invalid', 401);
    }
}
