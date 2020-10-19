import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@ObjectType()
@Entity({name: "stations"})
export class Station extends BaseEntity {

    @Field()
    @PrimaryColumn({ nullable: false })
    station_id: string;
    
    @Field()
    @Column()
    line_name: string;

    @Field()
    @Column({ nullable: false })
    station_name: string;

    @Field()
    @Column()
    ward: string;
}

