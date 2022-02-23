import { Request, Response } from 'express';
import { ChildService } from 'services/child.service';

export default class ChildController {
    public async postChild(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name, gender, birthday } = request.body;

        const childService = new ChildService();
        const result = await childService.postChild({ name, gender, birthday, responsible_id: id });

        return response.status(201).json(result);
    }

    public async getChilds(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const childService = new ChildService();
        const result = await childService.getChilds({ responsible_id: id });
        
        return response.status(200).json(result);
    }
}