import { MigrationInterface, QueryRunner } from "typeorm";

export class test1675199249990 implements MigrationInterface {
    name = 'test1675199249990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_employee" ALTER COLUMN "last_login" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_employee" ALTER COLUMN "last_login" DROP NOT NULL`);
    }

}
