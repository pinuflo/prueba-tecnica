import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1685055838611 implements MigrationInterface {
    name = 'Migration1685055838611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core_student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "rut" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "career_id" integer, CONSTRAINT "UQ_8c5ef7c9a29ebdeea066f648744" UNIQUE ("rut"), CONSTRAINT "PK_b949c67b26f65b559a50a1d1a9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_94e0f6e1e80a97af1e918713a7" ON "core_student" ("career_id") `);
        await queryRunner.query(`CREATE TABLE "core_career" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7cb2f12d0f8f4b8ab3e1206fd8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "core_student" ADD CONSTRAINT "FK_94e0f6e1e80a97af1e918713a70" FOREIGN KEY ("career_id") REFERENCES "core_career"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_student" DROP CONSTRAINT "FK_94e0f6e1e80a97af1e918713a70"`);
        await queryRunner.query(`DROP TABLE "core_career"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_94e0f6e1e80a97af1e918713a7"`);
        await queryRunner.query(`DROP TABLE "core_student"`);
    }

}
