import { IHistoric } from "entity/Historic";

export interface HistoricDTO {
    childId: string,
    weight?: number,
    height?: number,
    imc?: number,
    age?: number,
    status?: string,
    measurementDate?: Date
}

export interface IHistoricService {
    postHistoric (data: HistoricDTO):Promise<IHistoric | undefined>
    getHistoric (data: HistoricDTO):Promise<IHistoric[]>
};