import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IChild{
    id: string,
    name: string,
    gender: 'f'|'m',
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
    gender: 'f'|'m';

    @Column()
    birthday: Date;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @Column()
    id_responsible: string;
}
