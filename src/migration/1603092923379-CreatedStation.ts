import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedStation1603092923379 implements MigrationInterface {
    name = 'CreatedStation1603092923379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations" ("stationId" character varying NOT NULL, "line" character varying NOT NULL, "stationNameEng" character varying NOT NULL, "stationNameJpK" character varying NOT NULL, "stationNameJpH" character varying NOT NULL, "ward" character varying NOT NULL, CONSTRAINT "PK_c091279f703724ce44ab4e671a1" PRIMARY KEY ("stationId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stations"`);
    }

}
