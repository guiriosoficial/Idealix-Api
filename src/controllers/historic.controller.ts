import { Request, Response } from 'express';
import { HistoricService } from 'services/historic.service';
import { ChildService } from 'services/child.service';
import { ClassificationService } from 'services/classification.service';
import { calcAge, getStatus } from 'utils';

export default class HistoricController{
    public async postHistoric(request: Request, response: Response): Promise<Response> {
        const { childId: child_id, weight, height, measurementDate: measurement_date } = request.body;

        const imc = Number(((weight || 0) / Math.pow((height || 0), 2)).toFixed(2))

        const childService = new ChildService();
        const child = await childService.getChildById({ child_id })
        const age = calcAge(child ? child.birthday : new Date()) - calcAge(measurement_date || new Date())
        const roudedAge = age > 24 && age % 12 ? age - (age % 12) : age

        const classificationService = new ClassificationService();
        const classifications = await classificationService.getClassificationToStatus(child ? child.gender : 'f', roudedAge)
        classifications.map(c => Object.assign(c, { imc: Number((c.weight / Math.pow((c.height / 100), 2)).toFixed(2)) }))    

        const status = getStatus(classifications, imc)

        const historicService = new HistoricService();
        const result = await historicService.postHistoric({ child_id, weight, height, imc, status, age, measurement_date })

        return response.status(201).json(result);
    }

    public async getHistoric(request: Request, response: Response): Promise<Response> {
        const { childId: child_id } = request.params;
        const { id } = request.user;

        const historicService = new HistoricService();
        const historic = await historicService.getHistoric({ child_id })
        
        const childService = new ChildService();
        const child = await childService.getChildById({ child_id })
        const processedHistory = historic.sort((a, b) => Number(a.measurement_date) - Number(b.measurement_date));
        
        const historicLenght = processedHistory.length
        const lastHeight = historicLenght ? processedHistory[historicLenght - 1].height : null
        const lastWidght = historicLenght ? processedHistory[historicLenght - 1].weight : null
        const lastMeasurementDate = historicLenght ? processedHistory[historicLenght - 1].measurement_date : new Date()
        const lastImc = historicLenght ? processedHistory[historicLenght - 1].imc : 0
        const lastAge = historicLenght ? processedHistory[historicLenght - 1].age : 0
        const lastStatus = historicLenght ? processedHistory[historicLenght - 1].status : ''

        const state = {
            height: lastHeight,
            weight: lastWidght,
            measurementDate: lastMeasurementDate,
            age: lastAge,
            status: lastStatus,
            imc: lastImc
        }

        return response.status(200).json({
            ...child,
            ...state,
            historic
        });
    }
}