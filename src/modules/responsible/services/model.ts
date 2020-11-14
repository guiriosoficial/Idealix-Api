import { IResponsible } from "entity/Responsible";

export interface ResponsibleDTO { name?: string, email: string, password: string }

export interface IResponsibleService {
    getResponsible (data: ResponsibleDTO):Promise<IResponsible | undefined>
    saveResponsible (data: ResponsibleDTO):Promise<IResponsible | undefined>
};