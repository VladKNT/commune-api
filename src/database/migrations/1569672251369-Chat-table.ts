import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChatTable1569672251369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "chat" (
        "id" SERIAL NOT NULL,
        "title" character varying(32) NOT NULL,
        "photoUrl" character varying NOT NULL,
        "creatorId" integer, CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "chat" ADD
      CONSTRAINT "FK_77b3c245a0b1252384b64e53f57"
      FOREIGN KEY ("creatorId") REFERENCES "user"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "FK_77b3c245a0b1252384b64e53f57"`, undefined);
    await queryRunner.query(`DROP TABLE "chat"`, undefined);
  }
}
