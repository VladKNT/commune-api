import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventTable1569753921997 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "event" (
        "id" SERIAL NOT NULL,
        "name" character varying(32) NOT NULL,
        "description" character varying NOT NULL,
        "startDate" TIMESTAMP NOT NULL,
        "endDate" TIMESTAMP NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "creatorId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))
      `, undefined);

    await queryRunner.query(`ALTER TABLE "user" ADD "ownEventsId" integer`, undefined);

    await queryRunner.query(`
      ALTER TABLE "event" ADD
      CONSTRAINT "FK_7a773352fcf1271324f2e5a3e41"
      FOREIGN KEY ("creatorId") REFERENCES "user"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_b78065795dea6efe23ac2aad7d6"
      FOREIGN KEY ("ownEventsId") REFERENCES "event"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_b78065795dea6efe23ac2aad7d6"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_7a773352fcf1271324f2e5a3e41"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ownEventsId"`, undefined);
    await queryRunner.query(`DROP TABLE "event"`, undefined);
  }

}
