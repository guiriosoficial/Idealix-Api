import { getRepository, Repository } from "typeorm";
import { Classification, ClassificationInterface } from "entities/Classification";
import { ClassificationModel } from "models/classification.model";

export class ClassificationService implements ClassificationModel {
    private ormRepository: Repository<Classification>;

    constructor() {
        this.ormRepository = getRepository(Classification);
    }
    
    async getClassification(): Promise<ClassificationInterface[]> {
        const result = await this.ormRepository.query(
            'SELECT * FROM `idealix`.`classification` ORDER BY `gender`, `reference`, `age`'
        );
        
        return result;
    }

    async getClassificationToStatus(gender: string, age: number): Promise<ClassificationInterface[]> {
        const result = await this.ormRepository.find({
            where: { gender, age }
        });
        
        return result;
    }
}
