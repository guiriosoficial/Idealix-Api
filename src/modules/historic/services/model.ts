import { HistoricInterface } from "entity/Historic";

export interface HistoricDTO {
    childId: string,
    weight?: number,
    height?: number,
    imc?: number,
    age?: number,
    status?: string,
    measurementDate?: Date
}

export interface HistoricInterfaceService {
    postHistoric (data: HistoricDTO):Promise<HistoricInterface | undefined>
    getHistoric (data: HistoricDTO):Promise<HistoricInterface[]>
};