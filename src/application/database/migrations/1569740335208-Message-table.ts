import { MigrationInterface, QueryRunner } from 'typeorm';

export class MessageTable1569740335208 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      ALTER TABLE "user" DROP
      CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c"
    `, undefined);

    await queryRunner.query(`
      CREATE TABLE "message" (
        "id" SERIAL NOT NULL,
        "text" character varying NOT NULL,
        "creatorId" integer,
        "chatId" integer,
        CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`ALTER TABLE "user" ADD "messagesId" integer`, undefined);

    await queryRunner.query(`
      ALTER TABLE "message" ADD
      CONSTRAINT "FK_e04040c4ea7133eeddefff6417d"
      FOREIGN KEY ("creatorId") REFERENCES "user"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "message" ADD
      CONSTRAINT "FK_619bc7b78eba833d2044153bacc"
      FOREIGN KEY ("chatId") REFERENCES "chat"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c"
      FOREIGN KEY ("detailsId") REFERENCES "user_details"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_8534bbda9ca1a7fb7e6ac064b15"
      FOREIGN KEY ("messagesId") REFERENCES "message"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_8534bbda9ca1a7fb7e6ac064b15"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_619bc7b78eba833d2044153bacc"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_e04040c4ea7133eeddefff6417d"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "messagesId"`, undefined);
    await queryRunner.query(`DROP TABLE "message"`, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_4c62c8388460a107d0f450f9e0c"
      FOREIGN KEY ("detailsId") REFERENCES "user_details"("id")
      ON DELETE CASCADE ON UPDATE NO ACTION
    `, undefined);
  }

}
