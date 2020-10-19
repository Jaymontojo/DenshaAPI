import {Resolver, Mutation, Query, Arg } from "type-graphql";
import { Station } from "../src/entity/Station"
//import { StationInput } from "../src/input/StationInput"
import { StationCreate } from "../src/create/StationCreate"


@Resolver()
export class Resolvers {
    
    //Queries
    @Query(() => [Station])
    async findAllStations() {
        return await Station.find()
    }
    
    @Query(() => [Station])
    async findStationsByLine(@Arg("line_name") line_name: string) {
        return await Station.find( {line_name: line_name} )
    }

    @Query(() => [Station])
    async findStationsByWard(@Arg("ward") ward: string) {
        return await Station.find( {ward: ward} )
    }

    @Query(() => Station)
    async findStationById(@Arg("station_id") station_id: string) {
        return await Station.findOne( {station_id: station_id} )
    }
    
    //Add mutations
    @Mutation(() => Station)
    async addNewStation(@Arg('info', {validate: false} ) info: StationCreate) {
        const newStation = await Station.create(info).save();
        return newStation;
    } 
    
    //Delete mutations
    @Mutation(() => String)
    async removeStation(
        @Arg("station_id", () => String) station_id: string
    ) {
        await Station.delete({station_id})
        return "Station has been removed!"
    }

    //Update mutation
    // @Mutation(() => Station)
    // async updateStation(
    //     @Arg('edits', {validate: false}, () => StationInput ) edits: StationInput
    // ) {
    //     const updatedStation = await Station.update({edits});
    //     return updatedStation;
}