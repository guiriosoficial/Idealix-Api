import { Request, Response } from 'express';
import { ResponsibleService } from 'services/responsible.service';
import Err from '@shared/err';
import jwt from "jsonwebtoken";
import md5 from 'md5';

export default class ResponsibleController {
    public async postResponsible(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const responsibleService = new ResponsibleService();
        const responsible = await responsibleService.getExistResponsible({ email });

        if (responsible) {
            throw new Err('This email already exists', 400);
        } else {
            const obj = await responsibleService.saveResponsible({ name, email, password: md5(password) });
            if (obj) {
                const { id, name, email } = obj
                const result = {
                    id,
                    name,
                    email
                }
                return response.status(201).json(result);
            } else {
                throw new Err('User not created', 400);
            }
        }
    }

    public async postLogin(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const responsibleService = new ResponsibleService();
        const responsible = await responsibleService.getResponsible({ email, password: md5(password) });

        if (responsible) {
            const { id, name, email } = responsible;
            const result = {
                token: jwt.sign({ id }, process.env.JWT_SECRET || '', { expiresIn: '7d' }),
                id,
                name,
                email
            }
            return response.status(200).json(result);
        } else {
            throw new Err('E-mail or password is invalid', 400);
        }
    }
}