import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

export interface IHistoric{
    id: string,
    weight: number,
    height: number,
    measurement_date: Date,
    create_at: Date,
    update_at: Date,
    id_child: string
}

@Entity('historic')
export class Historic implements IHistoric {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal',{precision: 5, scale: 2})
    weight: number;

    @Column('decimal',{precision: 5, scale: 2})
    height: number;

    @Column()
    measurement_date: Date;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @Column()
    id_child: string;
}
