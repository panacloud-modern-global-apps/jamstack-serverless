import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({data}) => {
    console.log(data);
    return (
        <div>
            <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
            <div>{documentToReactComponents(data.allContentfulBlogPost.edges[0].node.body.json)}</div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            title
            body {
              json
            }
            publishTime
          }
        }
      }
  }
`