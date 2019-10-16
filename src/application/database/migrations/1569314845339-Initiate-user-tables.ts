import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitiateUserTables1569314845339 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "user_details" (
        "id" SERIAL NOT NULL,
        "firstName" character varying(32) NOT NULL,
        "lastName" character varying(32) NOT NULL,
        "bio" character varying(512) NOT NULL,
        "avatarUrl" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL NOT NULL,
        "username" character varying(32) NOT NULL,
        "email" character varying(32) NOT NULL,
        "password" character varying NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "detailsId" integer, "roleId" integer,
        CONSTRAINT "REL_4c62c8388460a107d0f450f9e0" UNIQUE ("detailsId"),
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`
      CREATE TABLE "role" (
        "id" SERIAL NOT NULL,
        "roleName" character varying(16) NOT NULL,
        CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user"
      ADD CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c" FOREIGN KEY ("detailsId")
      REFERENCES "user_details"("id")
      ON DELETE CASCADE ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user"
      ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId")
      REFERENCES "role"("id")
      ON DELETE SET NULL ON UPDATE NO ACTION
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c"`, undefined);
    await queryRunner.query(`DROP TABLE "role"`, undefined);
    await queryRunner.query(`DROP TABLE "user"`, undefined);
    await queryRunner.query(`DROP TABLE "user_details"`, undefined);
  }

}
