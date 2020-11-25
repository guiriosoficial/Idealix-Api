import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';
import { ChildService } from '../../child/services/childService';

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { childId, weight, height, measurementDate } = request.body;

        const historicService = new HistoricService();
        const result = await historicService.postHistoric({ childId, weight, height, measurementDate })

        return response.status(201).json(result);
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { childId } = request.params;
        const { id } = request.user;

        const historicService = new HistoricService();
        const historic = await historicService.getHistoric({ childId })
        const processedHistory =  historic
            .sort((a, b) => Number(a.measurement_date) - Number(b.measurement_date))
            .map(h => Object.assign(h, { imc: h.weight / Math.sqrt(h.height) }))

        const childService = new ChildService();
        const child = await childService.getChildById({ id_child: childId })

        const historicLenght = processedHistory.length
        const lastHeight = historicLenght ? processedHistory[historicLenght - 1].height : null
        const lastWidght = historicLenght ? processedHistory[historicLenght - 1].weight : null
        const lastImc = historicLenght ? processedHistory[historicLenght - 1].imc : ''
        const state = {
            height: lastHeight,
            weight: lastWidght,
            age: (Date.now() - +new Date(child ? child.birthday : '')) / 31557600000,
            imc: lastImc
        }

        return response.status(200).json({
            ...child,
            ...state,
            historic
        });
    }
}