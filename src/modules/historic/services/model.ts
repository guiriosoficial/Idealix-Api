import { IHistoric } from "entity/Historic";

export interface HistoricDTO { id_child: string, weight?: number, height?: number, measurement_date?: Date }

export interface IHistoricService {
    postHistoric (data: HistoricDTO):Promise<IHistoric | undefined>
    getHistoric (data: HistoricDTO):Promise<IHistoric[]>
};