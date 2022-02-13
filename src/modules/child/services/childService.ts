import { ChildInterface, Child } from "entity/Child";
import { getRepository, Repository } from "typeorm";
import { ChildInterfaceService, ChildDTO } from "./model";

export class ChildService implements ChildInterfaceService {
    private ormRepository: Repository<Child>;

    constructor() {
        this.ormRepository = getRepository(Child);
    }
    async getChild({ responsible_id }: ChildDTO): Promise<ChildInterface[]> {
        const result = await this.ormRepository.find({
            where: { responsible_id }
        }) 

        return result;
    }
    async postChild({ name, gender, birthday, responsible_id } : ChildDTO): Promise<ChildInterface | undefined> {
        const child = await this.ormRepository.create({
            name, gender, birthday, responsible_id
        });
        await this.ormRepository.save(child);
        return child;
    }
    async getChildById({ child_id }: ChildDTO): Promise<ChildInterface | undefined> {
        const child = await this.ormRepository.findOne({
            where: { id: child_id }
        })

        return child;

    }
}