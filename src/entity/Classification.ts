import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import { EGender } from "./Child";


export interface IClassification{
    id: string,
    gender: EGender,
    weight: number,
    height: number,
    age: number,
    create_at: Date,
    update_at: Date
}

@Entity('classification')
export class Classification implements IClassification {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    gender: EGender;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    age: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;
}
