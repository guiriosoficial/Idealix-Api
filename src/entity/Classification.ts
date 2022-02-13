import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ClassificationInterface {
    id: string,
    gender: 'f'|'m',
    reference: 'min'|'ideal'|'max',
    weight: number,
    height: number,
    imc: number,
    age: number,
    create_at: Date,
    update_at: Date
}

@Entity('classification')
export class Classification implements ClassificationInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    gender: 'f'|'m';
    
    @Column()
    reference: 'min'|'ideal'|'max';

    @Column('decimal', { precision: 5, scale: 2 })
    weight: number;

    @Column('decimal', { precision: 5, scale: 2 })
    height: number;

    @Column('decimal', { precision: 5, scale: 2 })
    imc: number;

    @Column()
    age: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;
}
