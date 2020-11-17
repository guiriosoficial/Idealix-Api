import { IHistoric } from "entity/Historic";
import { Historic } from "entity/Historic";
import { getRepository, Repository } from "typeorm";
import { IHistoricService, HistoricDTO } from "./model";

export class HistoricService implements IHistoricService {
    private ormRepository: Repository<Historic>;

    constructor() {
        this.ormRepository = getRepository(Historic);
    }
    async postHistoric( { id_child, weight, height, measurement_date }: HistoricDTO): Promise<IHistoric | undefined> {
        const child = await this.ormRepository.create({
            id_child, weight, height, measurement_date
        });
        await this.ormRepository.save(child);

        return child;
    }

    async getHistoric({ id_child }: HistoricDTO): Promise<IHistoric[]> {
        const result = await this.ormRepository.find({
            where: { id_child }
        }) 

        return result;
    }
}