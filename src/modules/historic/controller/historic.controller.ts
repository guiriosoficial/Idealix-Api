import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { id_child, weight, height, measurement_date } = request.body;

        const historicService = new HistoricService();
        await historicService.postHistoric({ id_child, weight, height, measurement_date })

        return response.status(201).json();
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { id_child } = request.params;
        const { id } = request.user;

        const historicService = new HistoricService();
        const result = await historicService.getHistoric({ id_child })

        return response.status(200).json(result);
    }
}