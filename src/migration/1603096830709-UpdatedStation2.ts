import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedStation21603096830709 implements MigrationInterface {
    name = 'UpdatedStation21603096830709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP CONSTRAINT "PK_c091279f703724ce44ab4e671a1"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "stationId"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "line"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "stationNameEng"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "station_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD CONSTRAINT "PK_259710176cd51b48f249d99f349" PRIMARY KEY ("station_id")`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "line_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "station_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "station_name"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "line_name"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP CONSTRAINT "PK_259710176cd51b48f249d99f349"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "station_id"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "stationNameEng" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "line" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "stationId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD CONSTRAINT "PK_c091279f703724ce44ab4e671a1" PRIMARY KEY ("stationId")`);
    }

}
