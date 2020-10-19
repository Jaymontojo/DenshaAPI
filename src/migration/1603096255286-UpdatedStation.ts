import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedStation1603096255286 implements MigrationInterface {
    name = 'UpdatedStation1603096255286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "stationNameJpK"`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "stationNameJpH"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ADD "stationNameJpH" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "stationNameJpK" character varying NOT NULL`);
    }

}
