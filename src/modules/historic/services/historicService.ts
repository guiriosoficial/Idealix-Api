import { IHistoric } from "entity/Historic";
import { Historic } from "entity/Historic";
import { getRepository, Repository } from "typeorm";
import { IHistoricService, HistoricDTO } from "./model";

export class HistoricService implements IHistoricService {
    private ormRepository: Repository<Historic>;

    constructor() {
        this.ormRepository = getRepository(Historic);
    }
    postHistoric(data: HistoricDTO): Promise<IHistoric | undefined> {
        throw new Error("Method not implemented.");
    }
    getHistoric(data: HistoricDTO): Promise<IHistoric | undefined> {
        throw new Error("Method not implemented.");
    }
}