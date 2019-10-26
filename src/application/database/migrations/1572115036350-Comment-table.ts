import { MigrationInterface, QueryRunner } from 'typeorm';

export class CommentTable1572115036350 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_c40e06f01aa6c1567d0b03fa6a8"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_8534bbda9ca1a7fb7e6ac064b15"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_b78065795dea6efe23ac2aad7d6"`, undefined);

    await queryRunner.query(`
      CREATE TABLE "comment" (
        "id" SERIAL NOT NULL,
        "text" character varying(512) NOT NULL,
        "eventId" integer,
        "creatorId" integer,
        CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id")
      )
    `, undefined);

    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "photosId"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "messagesId"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ownEventsId"`, undefined);

    await queryRunner.query(`
      ALTER TABLE "comment" ADD
      CONSTRAINT "FK_e4f8f71ea00e6eb8fc2fdd4844f"
      FOREIGN KEY ("eventId") REFERENCES "event"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "comment" ADD
      CONSTRAINT "FK_b6bf60ecb9f6c398e349adff52f"
      FOREIGN KEY ("creatorId") REFERENCES "user"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_b6bf60ecb9f6c398e349adff52f"`, undefined);
    await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e4f8f71ea00e6eb8fc2fdd4844f"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD "ownEventsId" integer`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD "messagesId" integer`, undefined);
    await queryRunner.query(`ALTER TABLE "event" ADD "photosId" integer`, undefined);
    await queryRunner.query(`DROP TABLE "comment"`, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_b78065795dea6efe23ac2aad7d6"
      FOREIGN KEY ("ownEventsId") REFERENCES "event"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "user" ADD
      CONSTRAINT "FK_8534bbda9ca1a7fb7e6ac064b15"
      FOREIGN KEY ("messagesId") REFERENCES "message"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "event" ADD
      CONSTRAINT "FK_c40e06f01aa6c1567d0b03fa6a8"
      FOREIGN KEY ("photosId") REFERENCES "event_photo"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);
  }

}
