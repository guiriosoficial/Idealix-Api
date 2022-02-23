import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface HistoricInterface {
    id: string,
    weight: number,
    height: number,
    imc: number,
    age: number,
    status: string,
    measurement_date: Date,
    create_at: Date,
    update_at: Date,
    child_id: string
}

@Entity('historic')
export class Historic implements HistoricInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal',{precision: 5, scale: 2})
    weight: number;

    @Column('decimal',{precision: 5, scale: 2})
    height: number;

    @Column('decimal',{precision: 5, scale: 2})
    imc: number;

    @Column('decimal',{precision: 5, scale: 2})
    age: number;

    @Column()
    status: string;

    @Column()
    measurement_date: Date;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @Column()
    child_id: string;
}
