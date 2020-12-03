import { Request, Response } from 'express';
import { HistoricService } from '../services/historicService';
import { ChildService } from '../../child/services/childService';
import { ClassificationService } from '../../classification/services/classificationService'

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
        const processedHistory = historic
            .sort((a, b) => Number(a.measurement_date) - Number(b.measurement_date))
            .map(h => Object.assign(h, {
                imc: Number((h.weight / Math.pow(h.height, 2)).toFixed(2)),
                age: calcAge(child ? child.birthday : new Date()) - calcAge(h.measurement_date)
            }));
        
        const historicLenght = processedHistory.length
        const lastHeight = historicLenght ? processedHistory[historicLenght - 1].height : null
        const lastWidght = historicLenght ? processedHistory[historicLenght - 1].weight : null
        const lastMeasurementDate = historicLenght ? processedHistory[historicLenght - 1].measurement_date : null
        const lastImc = historicLenght ? processedHistory[historicLenght - 1].imc : 0
        const lastAge = historicLenght ? processedHistory[historicLenght - 1].age : 0
        const roudedAge = lastAge > 24 && lastAge % 12 ? lastAge - (lastAge % 12) : lastAge 

        const classificationService = new ClassificationService();
        const classifications = await classificationService.getClassificationToStatus(child ? child.gender : 'f', roudedAge)
        classifications.map(c => Object.assign(c, { imc: Number((c.weight / Math.pow((c.height / 100), 2)).toFixed(2)) }))

        const classification = {
            max: classifications.find(c => c.reference === 'max') || 0,
            min: classifications.find(c => c.reference === 'min') || 0,
            ideal: classifications.find(c => c.reference === 'ideal') || 0
        }

        let status
        if (lastImc > classification.max.imc) {
            status = 'Acima do peso'
        } else if (lastImc < classification.min.imc) {
            status = 'Abaixo do peso'
        } else {
            status = 'Saudável'
        }

        const state = {
            height: lastHeight,
            weight: lastWidght,
            measurementDate: lastMeasurementDate,
            age: calcAge(child ? child.birthday : '00-00-0000'),
            status,
            imc: lastImc
        }

        return response.status(200).json({
            ...child,
            ...state,
            historic
        });
    }
}