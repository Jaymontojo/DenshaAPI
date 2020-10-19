import { ObjectType } from "type-graphql";
import {Entity, PrimaryColumn, Column} from "typeorm";

@ObjectType()
@Entity({name: "stations"})
export class Station {

    @PrimaryColumn({ nullable: false })
    station_id: string;
    
    @Column()
    line_name: string;

    @Column({ nullable: false })
    station_name: string;

    @Column()
    ward: string;
}

