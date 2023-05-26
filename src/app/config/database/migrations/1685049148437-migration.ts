import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1685049148437 implements MigrationInterface {
    name = 'Migration1685049148437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core_student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b949c67b26f65b559a50a1d1a9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "core_career" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "student_id" integer, CONSTRAINT "PK_a7cb2f12d0f8f4b8ab3e1206fd8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4efeac67d1fee49fd5bec5f7e7" ON "core_career" ("student_id") `);
        await queryRunner.query(`ALTER TABLE "core_career" ADD CONSTRAINT "FK_4efeac67d1fee49fd5bec5f7e75" FOREIGN KEY ("student_id") REFERENCES "core_student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_career" DROP CONSTRAINT "FK_4efeac67d1fee49fd5bec5f7e75"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4efeac67d1fee49fd5bec5f7e7"`);
        await queryRunner.query(`DROP TABLE "core_career"`);
        await queryRunner.query(`DROP TABLE "core_student"`);
    }

}
