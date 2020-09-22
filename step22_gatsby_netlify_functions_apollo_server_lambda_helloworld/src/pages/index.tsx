import React from "react"
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';


// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
{
  message
}
`;

export default function Home() {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  return (
      <div>
        <h2>Data Received from Apollo Client at runtime from Serverless Function:</h2>
        {loading && <p>Loading Client Side Querry...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.message && (
          <div>{data.message}</div>
        )}
      </div>
  );
    
}
