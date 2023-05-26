import { MigrationInterface, QueryRunner } from "typeorm";

export class mejoras1675185622743 implements MigrationInterface {
    name = 'mejoras1675185622743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_person" ADD "linkedin" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_person" DROP COLUMN "linkedin"`);
    }

}
