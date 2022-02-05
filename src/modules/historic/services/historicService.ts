import { IHistoric } from "entity/Historic";
import { Historic } from "entity/Historic";
import { getRepository, Repository } from "typeorm";
import { IHistoricService, HistoricDTO } from "./model";

export class HistoricService implements IHistoricService {
    private ormRepository: Repository<Historic>;

    constructor() {
        this.ormRepository = getRepository(Historic);
    }
    async postHistoric( { childId, weight, height, imc, age, status, measurementDate }: HistoricDTO): Promise<IHistoric | undefined> {
        const child = await this.ormRepository.create({
            id_child: childId,
            weight,
            height,
            imc,
            age,
            status,
            measurement_date: measurementDate
        });
        await this.ormRepository.save(child);

        return child;
    }

    async getHistoric({ childId }: HistoricDTO): Promise<IHistoric[]> {
        const result = await this.ormRepository.find({
            where: { id_child: childId }
        }) 

        return result;
    }
}