import { Request, Response } from 'express';
import { ChildService } from '../services/childService';

export default class ChildController {
    public async postChild(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name, gender, birthday } = request.body;
        const childService = new ChildService();
        await childService.postChild({ name, gender, birthday, id_responsible: id });
        return response.status(201).json();
    }

    public async getChild(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const childService = new ChildService();
        const result = await childService.getChild({ id_responsible: id });
        
        return response.status(200).json(result);
    }
}