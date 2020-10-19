import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { buildSchema } from "type-graphql";
import { Resolvers } from "./resolvers";


(async () => {
    //create express instance
    const app = express();    
    //create database connection to postgres
    await createConnection();
    //creating an apollo server. the buildSchema functon will build my schema from the resolvers.ts file
    const server = new ApolloServer({ schema: await buildSchema({
        resolvers: [Resolvers]
    }),
    context: ({req, res }) => ({req, res})
    });


    //connecting express to apollo server
    server.applyMiddleware({ app });
    
    //to serve static JS files
    app.use(express.static('./'))

    app.listen(4000, () => { 
    console.log('Running a GraphQL API server with Apollo at localhost:4000/graphql');
    });
})();
