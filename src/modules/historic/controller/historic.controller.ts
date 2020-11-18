import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';
import { ChildService } from '../../child/services/childService';
import { func } from '@hapi/joi';

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
        const historic = await historicService.getHistoric({ childId })
        historic.sort((a, b) => Number(a.measurement_date) - Number(b.measurement_date))

        const childService = new ChildService();
        const child = await childService.getChildById({ id_child: childId })

        const state = {
            height: historic[historic.length - 1].height,
            weight: historic[historic.length - 1].weight,
            age: (Date.now() - +new Date(child ? child.birthday : '')) / 31557600000,
            status: ''
        }

        return response.status(200).json({
            ...child,
            ...state,
            historic
        });
    }
}