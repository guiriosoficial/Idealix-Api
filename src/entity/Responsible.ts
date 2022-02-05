import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IResponsible{
    id: string,
    name: string,
    email: string,
    password: string,
    create_at: Date,
    update_at: Date
}

@Entity('responsible')
export class Responsible implements IResponsible {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;
}