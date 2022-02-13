import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ChildInterface {
    id: string,
    name: string,
    gender: 'f'|'m',
    birthday: Date,
    create_at: Date,
    update_at: Date,
    responsible_id: string
}

@Entity('child')
export class Child implements ChildInterface {
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
    responsible_id: string;
}
