import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Historic1605302417516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'historic',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'weight',
                        type: 'int',
                    },
                    {
                        name: 'height',
                        type: 'int',
                    },
                    {
                        name: 'measurement_date',
                        type: 'date',
                    },
                    {
                        name: 'id_child',
                        type: 'varchar',
                        generationStrategy: 'uuid',
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
                        name: 'id_child',
                        referencedTableName: 'child',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_child'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('historic')
    }

}
