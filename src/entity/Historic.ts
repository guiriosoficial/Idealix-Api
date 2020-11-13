import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Child } from "./Child";

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

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    measurement_date: Date;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @ManyToOne(() => Child, { eager: true })
    @JoinColumn({ name: 'id' })
    id_child: string;
}
