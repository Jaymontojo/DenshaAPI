const { gql } = require("apollo-server")


const typeDefs = gql`

    type Query {
        hello: String
        AllStations: [Station]
        FindStationByID(name:String!): Station
        FindStationByName(name:String!): Station
        FindStationByLine(line:String!): Station
        FindStationByWard(ward:String!): [Station]
    }

    type Mutation {
        DeleteStation(name: String!): [Station]
        EditStation(name: String!, edit: StationInput): Station
        InsertStation(input: StationInput): Station
    }

    type Station {
        stationId: String!
        line: String!
        stationNameEng: String!
        stationNameJpK: String!
        stationNameJpH: String!
        ward: String!
    }

    input StationInput {
        stationId: String!
        line: String!
        stationNameEng: String!
        stationNameJpK: String!
        stationNameJpH: String!
        ward: String!
    }
`;

module.exports = typeDefs;