import { MigrationInterface, QueryRunner } from "typeorm";

export class uuid1675186611393 implements MigrationInterface {
    name = 'uuid1675186611393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_person" DROP CONSTRAINT "FK_2aa54ea7bef00a031bda873433e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2aa54ea7bef00a031bda873433"`);
        await queryRunner.query(`ALTER TABLE "core_person" DROP CONSTRAINT "REL_2aa54ea7bef00a031bda873433"`);
        await queryRunner.query(`ALTER TABLE "core_person" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "core_person" ADD "employee_id" uuid`);
        await queryRunner.query(`ALTER TABLE "core_person" ADD CONSTRAINT "UQ_2aa54ea7bef00a031bda873433e" UNIQUE ("employee_id")`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP CONSTRAINT "FK_ad9eb8a67df9df5f78e87d48103"`);
        await queryRunner.query(`ALTER TABLE "core_employee" DROP CONSTRAINT "PK_ac7609a83c8f14b141d9c8ca05c"`);
        await queryRunner.query(`ALTER TABLE "core_employee" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD CONSTRAINT "PK_ac7609a83c8f14b141d9c8ca05c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP CONSTRAINT "UQ_f0266e29c72de74c040b791884c"`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD "employee_id" uuid`);
        await queryRunner.query(`CREATE INDEX "IDX_2aa54ea7bef00a031bda873433" ON "core_person" ("employee_id") `);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD CONSTRAINT "UQ_f0266e29c72de74c040b791884c" UNIQUE ("employee_id", "profile_id")`);
        await queryRunner.query(`ALTER TABLE "core_person" ADD CONSTRAINT "FK_2aa54ea7bef00a031bda873433e" FOREIGN KEY ("employee_id") REFERENCES "core_employee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD CONSTRAINT "FK_ad9eb8a67df9df5f78e87d48103" FOREIGN KEY ("employee_id") REFERENCES "core_employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP CONSTRAINT "FK_ad9eb8a67df9df5f78e87d48103"`);
        await queryRunner.query(`ALTER TABLE "core_person" DROP CONSTRAINT "FK_2aa54ea7bef00a031bda873433e"`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP CONSTRAINT "UQ_f0266e29c72de74c040b791884c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2aa54ea7bef00a031bda873433"`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD "employee_id" integer`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD CONSTRAINT "UQ_f0266e29c72de74c040b791884c" UNIQUE ("employee_id", "profile_id")`);
        await queryRunner.query(`ALTER TABLE "core_employee" DROP CONSTRAINT "PK_ac7609a83c8f14b141d9c8ca05c"`);
        await queryRunner.query(`ALTER TABLE "core_employee" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "core_employee" ADD CONSTRAINT "PK_ac7609a83c8f14b141d9c8ca05c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "core_employee_profile" ADD CONSTRAINT "FK_ad9eb8a67df9df5f78e87d48103" FOREIGN KEY ("employee_id") REFERENCES "core_employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core_person" DROP CONSTRAINT "UQ_2aa54ea7bef00a031bda873433e"`);
        await queryRunner.query(`ALTER TABLE "core_person" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "core_person" ADD "employee_id" integer`);
        await queryRunner.query(`ALTER TABLE "core_person" ADD CONSTRAINT "REL_2aa54ea7bef00a031bda873433" UNIQUE ("employee_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_2aa54ea7bef00a031bda873433" ON "core_person" ("employee_id") `);
        await queryRunner.query(`ALTER TABLE "core_person" ADD CONSTRAINT "FK_2aa54ea7bef00a031bda873433e" FOREIGN KEY ("employee_id") REFERENCES "core_employee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
