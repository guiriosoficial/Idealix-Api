import { IResponsible, Responsible } from "entity/Responsible";
import { getRepository, Repository } from "typeorm";
import { IResponsibleService, ResponsibleDTO } from "./model";

export class ResponsibleService implements IResponsibleService {
    private ormRepository: Repository<Responsible>;

    constructor() {
        this.ormRepository = getRepository(Responsible);
    }
    async getResponsible({ email, password }: ResponsibleDTO): Promise<IResponsible | undefined> {
        const responsible = await this.ormRepository.findOne({
            where: { email, password }
        });
        return responsible;
    }
    async getExistResponsible({ email }: ResponsibleDTO): Promise<IResponsible | undefined> {
        const responsible = await this.ormRepository.findOne({
            where: { email }
        });
        return responsible;
    }
    async saveResponsible({ name, email, password }: ResponsibleDTO): Promise<IResponsible | undefined> {
        const responsible = this.ormRepository.create({
            name, email, password
        });
        await this.ormRepository.save(responsible);
        return responsible;
    }
}