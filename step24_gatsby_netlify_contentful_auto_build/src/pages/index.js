import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from 'gatsby-image';

const Home = ()=>  {

    const data = useStaticQuery(
        graphql`
            query {
                allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
                edges {
                    node {
                    id
                    title
                    slug
                    publishedDate(formatString: "DD MMMM YYYY")
                    featuredImage {
                        id
                        fluid(maxWidth: 750) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    excerpt {
                        id
                        childMarkdownRemark {
                        excerpt(pruneLength: 500)
                        }
                    }
                    }
                }
                }
            }      
        `
    );
    console.log("data = ",data);
    return (
        <Layout>
            <SEO title="Blog Home" />
            <div>
                <ul className="posts">
                    {
                        data.allContentfulBlogPost.edges.map(edge=>{
                            return (
                                <li className="post" key={edge.node.id} >
                                    <h2>
                                        <Link to={`/${edge.node.slug}`}>
                                            {edge.node.title}
                                        </Link>
                                    </h2>
                                    <div className="meta">
                                        <span>Posted on {edge.node.publishedDate}</span>
                                    </div>
                                    {
                                        edge.node.featuredImage && (
                                            <Img className="featured" fluid={edge.node.featuredImage.fluid}
                                                alt={edge.node.title} />
                                        )
                                    }
                                    <p className="excerpt">
                                        {edge.node.excerpt.childMarkdownRemark.excerpt}
                                    </p>
                                    <div className="button">
                                        <Link to={`/${edge.node.slug}`}>Read More</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}
export default Home;