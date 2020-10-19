const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const express = require("express")

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.use(express.static('./'))

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});