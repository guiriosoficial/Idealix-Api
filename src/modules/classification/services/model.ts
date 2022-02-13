import { ClassificationInterface } from "entity/Classification";

export interface ClassificationInterfaceService {
    getClassification ():Promise<ClassificationInterface[]>
};