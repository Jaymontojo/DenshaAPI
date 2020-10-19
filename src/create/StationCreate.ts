import { Field, InputType } from "type-graphql";
//import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@InputType()
export class StationCreate {

    @Field()
    station_id: string;
    
    @Field()
    line_name: string;

    @Field()
    station_name: string;

    @Field()
    ward: string;

}