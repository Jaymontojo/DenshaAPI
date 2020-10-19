const { gql } = require("apollo-server")


export const typeDefs = gql`

    #Defining the query methods
    type Query {
        hello: String
        AllStations: [Station]
        FindStationByID(name:String!): Station
        FindStationByName(name:String!): Station
        FindStationByLine(line:String!): Station
        FindStationByWard(ward:String!): [Station]
    }
    
    #Defining the mutation methods
    type Mutation {
        DeleteStation(name: String!): [Station]
        EditStation(name: String!, edit: StationInput): Station
        InsertStation(input: StationInput): Station
    }
    
    #Defining the station type
    type Station {
        stationId: String!
        line: String!
        stationNameEng: String!
        stationNameJpK: String!
        stationNameJpH: String!
        ward: String!
    }

    #Defining the station input
    input StationInput {
        stationId: String!
        line: String!
        stationNameEng: String!
        stationNameJpK: String!
        stationNameJpH: String!
        ward: String!
    }
`;

