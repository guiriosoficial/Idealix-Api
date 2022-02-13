import { HistoricInterface } from "entity/Historic";
import { Historic } from "entity/Historic";
import { getRepository, Repository } from "typeorm";
import { HistoricInterfaceService, HistoricDTO } from "./model";

export class HistoricService implements HistoricInterfaceService {
    private ormRepository: Repository<Historic>;

    constructor() {
        this.ormRepository = getRepository(Historic);
    }
    async postHistoric( { childId, weight, height, imc, age, status, measurementDate }: HistoricDTO): Promise<HistoricInterface | undefined> {
        const child = await this.ormRepository.create({
            child_id: childId,
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

    async getHistoric({ childId }: HistoricDTO): Promise<HistoricInterface[]> {
        const result = await this.ormRepository.find({
            where: { child_id: childId }
        }) 

        return result;
    }
}