/**
 * Created by will on 25/11/18.
 */
import { StaticQuery, graphql, Link } from "gatsby";
import React from 'react';
import Img from "gatsby-image"
import BlogList from './BlogList';

const RecentBlogs =() => (
<StaticQuery
  query={
    graphql`
        query recentBlogsQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3,
                      filter: {fileAbsolutePath: {regex: "/(Blockchain|MyData|TheCommunityMind|Identity|Healthcare)/.*.md$/"}}) {
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
                                sizes(maxHeight: 500) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        }
      `
  }
  render={data => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <BlogList posts={posts}/>
    )
  }}
  />
);

export default RecentBlogs;
