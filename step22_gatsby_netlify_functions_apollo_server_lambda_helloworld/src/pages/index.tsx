import React, {useState, useEffect} from "react";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
  cache: new InMemoryCache()
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Gatsby Serverless Apollo app</h2>
      </div>
    </ApolloProvider>
  );
    
}
