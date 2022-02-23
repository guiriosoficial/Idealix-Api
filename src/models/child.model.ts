import { ChildInterface } from "entities/Child";

export interface ChildDTO { 
    child_id?: string,
    name?: string,
    gender?: 'f'|'m',
    birthday?: Date,
    responsible_id?: string 
}

export interface ChildModel {
    getChilds(data: ChildDTO): Promise<ChildInterface[]>
    getChildById(data: ChildDTO): Promise<ChildInterface | undefined>
    postChild(data: ChildDTO): Promise<ChildInterface | undefined>
};
