import { ResponsibleInterface } from "entity/Responsible";

export interface ResponsibleDTO { name?: string, email: string, password?: string }

export interface ResponsibleInterfaceService {
    getResponsible (data: ResponsibleDTO):Promise<ResponsibleInterface | undefined>
    getExistResponsible (data: ResponsibleDTO):Promise<ResponsibleInterface | undefined>
    saveResponsible (data: ResponsibleDTO):Promise<ResponsibleInterface | undefined>
};