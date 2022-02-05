import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


export interface IClassification{
    id: string,
    reference: 'min'|'ideal'|'max',
    gender: 'f'|'m',
    weight: number,
    height: number,
    imc: number,
    age: number,
    create_at: Date,
    update_at: Date
}

@Entity('classification')
export class Classification implements IClassification {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    reference: 'min'|'ideal'|'max';

    @Column()
    gender: 'f'|'m';

    @Column('decimal',{precision: 5, scale: 2})
    weight: number;

    @Column('decimal',{precision: 5, scale: 2})
    height: number;

    @Column('decimal',{precision: 5, scale: 2})
    imc: number;

    @Column()
    age: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;
}
