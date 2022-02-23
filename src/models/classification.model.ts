import { ClassificationInterface } from "entities/Classification";

export interface ClassificationModel {
    getClassification(): Promise<ClassificationInterface[]>
};
