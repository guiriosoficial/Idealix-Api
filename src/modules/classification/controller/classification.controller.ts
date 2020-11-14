import ErrorHandler from '@shared/error_handler';
import { Request, Response } from 'express';
import { ClassificationService } from '../services/classificationService';

export default class ClassificationController{
    public async getClassification(request: Request, response: Response): Promise<Response> {
        const classificationService = new ClassificationService()

        const result = await classificationService.getClassification();
        
        return response.status(200).json(result);
    }
}