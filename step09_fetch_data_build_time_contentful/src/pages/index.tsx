import React from 'react';
import { graphql } from 'gatsby';

export default ({data}) => {
    console.log(data);
    return (
        <div>
            <div>{data.contentfulBlogPost.title}</div>
        </div>
    );
}


export const query = graphql`
  query {
    contentfulBlogPost {
        title
        body {
          json
        }
        publishTime
      }
  }
`