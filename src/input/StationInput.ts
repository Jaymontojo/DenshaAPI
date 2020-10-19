import { Field, InputType } from "type-graphql";
//import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@InputType()
export class StationInput {

    @Field(() => String, {nullable: true})
    station_id: string | null;
    
    @Field(() => String, {nullable: true})
    line_name: string | null;

    @Field(() => String, {nullable: true})
    station_name: string | null;

    @Field(() => String, {nullable: true})
    ward: string | null;

}