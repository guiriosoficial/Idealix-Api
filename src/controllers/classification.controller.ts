import { Request, Response } from 'express';
import { ClassificationService } from 'services/classification.service';

export default class ClassificationController{
    public async getClassification(_request: Request, response: Response): Promise<Response> {
        const classificationService = new ClassificationService();
        const result = await classificationService.getClassification();

        return response.status(200).json(result);
    }
}