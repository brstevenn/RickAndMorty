import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
