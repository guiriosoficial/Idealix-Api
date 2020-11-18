import { IHistoric } from "entity/Historic";

export interface HistoricDTO { childId: string, weight?: number, height?: number, measurementDate?: Date }

export interface IHistoricService {
    postHistoric (data: HistoricDTO):Promise<IHistoric | undefined>
    getHistoric (data: HistoricDTO):Promise<IHistoric[]>
};