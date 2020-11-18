import { IChild } from "entity/Child";

export interface ChildDTO { 
    id_child?: string,
    name?: string,
    gender?: 'f'|'m',
    birthday?: Date,
    id_responsible?: string 
}

export interface IChildService {
    getChild (data: ChildDTO):Promise<IChild[]>
    getChildById (data: ChildDTO): Promise<IChild | undefined>
    postChild (data: ChildDTO):Promise<IChild | undefined>
};