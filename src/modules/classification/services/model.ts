import { IClassification } from "entity/Classification";

export interface ClassificationDTO { gender: 'f'|'m', weight: number, height: number, age: number }

export interface IClassificationService {
    getClassification (data: ClassificationDTO):Promise<IClassification | undefined>
};