import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';
import { ChildService } from '../../child/services/childService';

function calcAge (time = new Date) {
    return ~~Math.round(((Date.now() - +new Date(time)) / 31557600000) * 12)
}

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { childId, weight, height, measurementDate } = request.body;

        const historicService = new HistoricService();
        const result = await historicService.postHistoric({ childId, weight, height, measurementDate })

        const childService = new ChildService();
        const child = await childService.getChildById({ id_child: childId })

        Object.assign(result, {
            imc: Number(((result ? result.weight : 0) / Math.pow((result ? result.height : 0), 2)).toFixed(2)),
            age: calcAge(child ? child.birthday : new Date()) - calcAge(result ? result.measurement_date : new Date())
        })
        return response.status(201).json(result);
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { childId } = request.params;
        const { id } = request.user;

        const historicService = new HistoricService();
        const historic = await historicService.getHistoric({ childId })

        const childService = new ChildService();
        const child = await childService.getChildById({ id_child: childId })
        const processedHistory =  historic
            .sort((a, b) => Number(a.measurement_date) - Number(b.measurement_date))
            .map(h => Object.assign(h, {
                imc: Number((h.weight / Math.pow(h.height, 2)).toFixed(2)),
                age: calcAge(child ? child.birthday : new Date()) - calcAge(h.measurement_date)
            }));

        const historicLenght = processedHistory.length
        const lastHeight = historicLenght ? processedHistory[historicLenght - 1].height : null
        const lastWidght = historicLenght ? processedHistory[historicLenght - 1].weight : null
        const lastImc = historicLenght ? processedHistory[historicLenght - 1].imc : null
        const state = {
            height: lastHeight,
            weight: lastWidght,
            age: calcAge(child ? child.birthday : new Date()),
            status: 'Saldável',
            imc: lastImc
        }

        return response.status(200).json({
            ...child,
            ...state,
            historic
        });
    }
}