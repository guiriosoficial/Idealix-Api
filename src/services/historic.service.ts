import { getRepository, Repository } from "typeorm";
import { Historic, HistoricInterface } from "entities/Historic";
import { HistoricModel, HistoricDTO } from "models/historic.model";

export class HistoricService implements HistoricModel {
    private ormRepository: Repository<Historic>;

    constructor() {
        this.ormRepository = getRepository(Historic);
    }

    async postHistoric({ child_id, weight, height, imc, age, status, measurement_date }: HistoricDTO): Promise<HistoricInterface | undefined> {
        const child = await this.ormRepository.create({
            child_id,
            weight,
            height,
            imc,
            age,
            status,
            measurement_date
        });
        await this.ormRepository.save(child);

        return child;
    }

    async getHistoric({ child_id }: HistoricDTO): Promise<HistoricInterface[]> {
        const result = await this.ormRepository.find({
            where: { child_id }
        }) 

        return result;
    }
}
