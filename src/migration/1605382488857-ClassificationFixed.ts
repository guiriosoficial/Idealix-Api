import {MigrationInterface, QueryRunner} from "typeorm";

export class ClassificationFixed1605382488857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO idealix.classification (id, gender, weight, height, age, create_at, update_at) VALUES ('2', 'm', 5, 4, 2, DEFAULT, DEFAULT)")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM idealix.classification")
    }

}
