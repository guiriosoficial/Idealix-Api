import { Request, Response } from 'express';

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { id_child, weight, height, measurement_date } = request.body;
        return response.status(204).json();
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { id_child } = request.params;
        const { id } = request.user;
        const result = [{
                id_child, weight: 0.45, height: 1.45, measurement_date: '2020-04-10'
            }]
        return response.status(200).json(result);
    }
}