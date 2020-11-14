import { Classification } from "entity/Classification";
import { IClassification } from "entity/Classification";
import { getRepository, Repository } from "typeorm";
import { IClassificationService, ClassificationDTO } from "./model";

export class ClassificationService implements IClassificationService {
    private ormRepository: Repository<Classification>;

    constructor() {
        this.ormRepository = getRepository(Classification);
    }
    postHistoric(data: ClassificationDTO): Promise<IClassification | undefined> {
        throw new Error("Method not implemented.");
    }
    getClassification(data: ClassificationDTO): Promise<IClassification | undefined> {
        throw new Error("Method not implemented.");
    }
}