import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Child1605300847507 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'child',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'gender',
                        type: 'varchar',
                    },
                    {
                        name: 'birthday',
                        type: 'date',
                    },
                    {
                        name: 'id_responsible',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'id_responsible',
                        referencedTableName: 'responsible',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_responsible'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('child')
    }
}
