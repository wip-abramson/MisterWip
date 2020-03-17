import React from 'react';
import Layout from '../components/layout'
import BlogList from '../components/BlogList'
import { graphql } from 'gatsby'
export default function Healthcare({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>

      <BlogList posts={posts}/>

    </Layout>

  );
}

export const healthcareQuery = graphql`
  query HealthcareQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/(Healthcare)/.*.md$/"}}) {
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
