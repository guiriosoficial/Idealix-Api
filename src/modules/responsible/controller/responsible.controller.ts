import ErrorHandler from '@shared/error_handler';
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import md5 from 'md5';
import { ResponsibleService } from '../services/responsibleService';

export default class ResponsibleController {
    public async postResponsible(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const responsibleService = new ResponsibleService();

        const responsible = await responsibleService.getExistResponsible({ email });
        if (responsible) {
            throw new ErrorHandler('This email already exists', 400);
        } else {
            const obj = await responsibleService.saveResponsible({ name, email, password: md5(password) });
            if (obj) {
                
                const result = {
                    id: obj.id, name: obj.name, email: obj.email
                }
                return response.status(201).json(result);
            } else {
                throw new ErrorHandler('User not created', 400);
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
                id, name, email
            }
            return response.status(200).json(result);
        } else {
            throw new ErrorHandler('E-mail or password is invalid', 400);
        }
    }
}