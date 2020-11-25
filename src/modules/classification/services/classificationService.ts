import { Classification } from "entity/Classification";
import { IClassification } from "entity/Classification";
import { getRepository, Repository } from "typeorm";
import { IClassificationService } from "./model";

export class ClassificationService implements IClassificationService {
    private ormRepository: Repository<Classification>;

    constructor() {
        this.ormRepository = getRepository(Classification);
    }
    
    async getClassification(): Promise<IClassification[]> {
        const result = await this.ormRepository.query(
            'SELECT * FROM `idealix`.`classification` ORDER BY `gender`, `age`'
        );
        
        return result;
    }
}