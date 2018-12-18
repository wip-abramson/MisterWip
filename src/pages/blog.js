import React from "react";
import '../assets/css/blog-listing.css';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import BlogList from '../components/BlogList';
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
        <div id="main">
            <BlogList posts={posts}/>

        </div>

    </Layout>
    
  );
}
export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        featuredImage {
                            childImageSharp{
                                sizes(maxHeight: 400) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;