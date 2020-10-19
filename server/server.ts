import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
//import { buildSchema } from "type-graphql";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    await createConnection();

    const app = express();    

    app.use(express.static('./'))

    server.applyMiddleware({ app });

    app.listen(4000); 
    console.log(`Running a GraphQL API server with Apollo at localhost:4000/graphql`);
}

startServer();