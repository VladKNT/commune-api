import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventPhotoTable1571215504336 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "event_photo" (
        "id" SERIAL NOT NULL,
        "photoUrl" character varying NOT NULL,
        "eventAlbumId" integer,
        CONSTRAINT "PK_ca1a36a8d665ae39e85cfcf6f91" PRIMARY KEY ("id")
        )
      `, undefined);

    await queryRunner.query(`ALTER TABLE "event" ADD "previewPhotoId" integer`, undefined);
    await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "UQ_df9551ec0457db179931b883649" UNIQUE ("previewPhotoId")`, undefined);
    await queryRunner.query(`ALTER TABLE "event" ADD "photosId" integer`, undefined);

    await queryRunner.query(`
      ALTER TABLE "event_photo" ADD
      CONSTRAINT "FK_a4b0902972a787452daeb14a055"
      FOREIGN KEY ("eventAlbumId") REFERENCES "event"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "event" ADD
      CONSTRAINT "FK_df9551ec0457db179931b883649"
      FOREIGN KEY ("previewPhotoId") REFERENCES "event_photo"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);

    await queryRunner.query(`
      ALTER TABLE "event" ADD
      CONSTRAINT "FK_c40e06f01aa6c1567d0b03fa6a8"
      FOREIGN KEY ("photosId") REFERENCES "event_photo"("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_c40e06f01aa6c1567d0b03fa6a8"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_df9551ec0457db179931b883649"`, undefined);
    await queryRunner.query(`ALTER TABLE "event_photo" DROP CONSTRAINT "FK_a4b0902972a787452daeb14a055"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "photosId"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "UQ_df9551ec0457db179931b883649"`, undefined);
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "previewPhotoId"`, undefined);
    await queryRunner.query(`DROP TABLE "event_photo"`, undefined);
  }

}
