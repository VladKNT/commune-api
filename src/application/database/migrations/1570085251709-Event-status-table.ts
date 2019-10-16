import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventStatusTable1570085251709 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "event_status" (
        "id" SERIAL NOT NULL,
        "statusName" character varying(16) NOT NULL,
        CONSTRAINT "PK_59625166a3db9a45c511ac91718" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`ALTER TABLE "event" ADD "statusId" integer`, undefined);

    await queryRunner.query(`
      ALTER TABLE "event" ADD
      CONSTRAINT "FK_9f4a1bc77e318e5ef6c1d47dafa"
      FOREIGN KEY ("statusId") REFERENCES "event_status"("id")
      ON DELETE SET NULL ON UPDATE NO ACTION
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_9f4a1bc77e318e5ef6c1d47dafa"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "statusId"`, undefined);
    await queryRunner.query(`DROP TABLE "event_status"`, undefined);
  }

}
