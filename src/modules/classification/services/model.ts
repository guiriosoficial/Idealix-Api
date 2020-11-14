import { IClassification } from "entity/Classification";

export interface IClassificationService {
    getClassification ():Promise<IClassification[]>
};