import { MigrationInterface, QueryRunner } from "typeorm";

export class lol1675195832409 implements MigrationInterface {
    name = 'lol1675195832409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_employee" DROP COLUMN "last_login"`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD "last_login" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_employee" DROP COLUMN "last_login"`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD "last_login" date`);
    }

}
