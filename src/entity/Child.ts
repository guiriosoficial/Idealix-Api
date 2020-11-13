import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Responsible } from "./Responsible";

export enum EGender { F = "f", M = "m" };

export interface IChild{
    id: string,
    name: string,
    gender: EGender,
    birthday: Date,
    create_at: Date,
    update_at: Date,
    id_responsible: string
}

@Entity('child')
export class Child implements IChild {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    gender: EGender;

    @Column()
    birthday: Date;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @ManyToOne(() => Responsible, { eager: true })
    @JoinColumn({ name: 'id' })
    id_responsible: string;
}
