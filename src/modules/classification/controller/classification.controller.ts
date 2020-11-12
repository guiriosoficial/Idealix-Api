import ErrorHandler from '@shared/error_handler';
import { Request, Response } from 'express';

export default class ClassificationController{
    public async getClassification(request: Request, response: Response): Promise<Response> {
        const result = [{
            id: 1, gender: "F", weight: 0.45, height: 1.45, age:2
        }]
        return response.status(200).json(result);
    }
}