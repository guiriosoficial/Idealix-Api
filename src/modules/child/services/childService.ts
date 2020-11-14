import { IChild, Child } from "entity/Child";
import { getRepository, Repository } from "typeorm";
import { IChildService, ChildDTO } from "./model";

export class ChildService implements IChildService {
    private ormRepository: Repository<Child>;

    constructor() {
        this.ormRepository = getRepository(Child);
    }
    async getChild({ id_responsible }: ChildDTO): Promise<IChild[]> {
        const result = await this.ormRepository.find({
            where: { id_responsible }
        }) 

        return result;
    }
    async postChild({ name, gender, birthday, id_responsible } : ChildDTO): Promise<IChild | undefined> {
        const child = await this.ormRepository.create({
            name, gender, birthday, id_responsible
        });
        await this.ormRepository.save(child);
        return child;
    }
}