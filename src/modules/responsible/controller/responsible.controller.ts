import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

export default class ResponsibleController{
    public async postResponsible(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        return response.status(204).json();
    }

    public async postLogin(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const result = {
            token: jwt.sign({ id: '123123' },`idealix@123`, { expiresIn: '7d' })
        }
        return response.status(200).json(result);
    }
}