import { IChild } from "entity/Child";

export interface ChildDTO { 
    name?: string,
    gender?: 'f'|'m',
    birthday?: Date,
    id_responsible: string 
}

export interface IChildService {
    getChild (data: ChildDTO):Promise<IChild[]>
    postChild (data: ChildDTO):Promise<IChild | undefined>
};