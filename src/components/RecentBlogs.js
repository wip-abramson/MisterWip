/**
 * Created by will on 25/11/18.
 */
import { StaticQuery, graphql, Link } from "gatsby";
import React from 'react';
import Img from "gatsby-image"

const RecentBlogs =() => (
<StaticQuery
  query={
    graphql`
        query recentBlogsQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3,
                      filter: {fileAbsolutePath: {regex: "/(Blockchain|MyData|TheCommunityMind)/.*.md$/"}}) {
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
                                sizes(maxWidth: 700, maxHeight: 500) {
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
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <Link className="blog-link" to={post.frontmatter.path}>
                  <h1>
                    {post.frontmatter.title}
                  </h1>
                  <Img style={{objectFit: "contain"}} sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </Link>
              </div>
            );
          })}
      </div>
    )
  }}
  />
);

export default RecentBlogs;