import { Link } from "gatsby";
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "DD MMMM YYYY")
            featuredImage {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            body {
                json
            }
        }
    }
`;

const BlogPost = (props) => {
    console.log(props);
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <Link to="/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className="meta">
                    Post on {props.data.contentfulBlogPost.publishedDate}
                </span>
                {
                    props.data.contentfulBlogPost.featuredImage && (
                        <Img 
                            className="featured"
                            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
                            alt={props.data.contentfulBlogPost.title}
                        />
                    )
                }
                {/*JSON.stringify(props.data.contentfulBlogPost.body.json)*/}
                {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
            </div>
        </Layout>
    )
}
export default BlogPost
