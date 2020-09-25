import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8888/.netlify/functions/graphql_faunadb',
    fetch,
  }),
  cache: new InMemoryCache()
});
