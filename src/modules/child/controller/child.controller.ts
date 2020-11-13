import { Request, Response } from 'express';

export default class ChildController {
    public async postChild(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name, gender, birthday } = request.body;
        return response.status(204).json();
    }

    public async getChild(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const result = [
            {
                id: 123, name: 'Aline', birthday: '2000-03-01', id_responsible: id
            }
        ]
        return response.status(200).json(result);
    }
}