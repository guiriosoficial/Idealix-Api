import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { childId, weight, height, measurementDate } = request.body;

        const historicService = new HistoricService();
        await historicService.postHistoric({ childId, weight, height, measurementDate })

        return response.status(201).json();
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { childId } = request.params;
        const { id } = request.user;

        const historicService = new HistoricService();
        const result = await historicService.getHistoric({ childId })

        return response.status(200).json(result);
    }
}