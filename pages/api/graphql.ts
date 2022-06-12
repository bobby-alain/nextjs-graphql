import { ApolloServer } from "apollo-server-micro";

const server = new ApolloServer({
  typeDefs: `
		  type Query {
			  hello: String
		  } 
		  `,

  resolvers: {
    Query: {
      hello: () => "Hello world!",
    },
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  return server.createHandler({ path: "/api/graphql" })(req, res);
}
