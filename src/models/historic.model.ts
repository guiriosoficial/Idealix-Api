import { HistoricInterface } from "entities/Historic";

export interface HistoricDTO {
    child_id: string,
    weight?: number,
    height?: number,
    imc?: number,
    age?: number,
    status?: string,
    measurement_date?: Date
}

export interface HistoricModel {
    postHistoric(data: HistoricDTO): Promise<HistoricInterface | undefined>
    getHistoric(data: HistoricDTO): Promise<HistoricInterface[]>
};
