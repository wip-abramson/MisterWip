/**
 * Created by will on 01/12/18.
 */
import React from 'react';
import BlogHamburger from '../components/BlogHamburger';
import Img from "gatsby-image"
import {Link} from "gatsby";

const BlogList = ({posts}) => {
  return (
    <div id="main">

      <BlogHamburger id="header"/>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <Link className="blog-link" to={post.frontmatter.path}>
                <h1>
                  {post.frontmatter.title}
                </h1>
                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                <h2 style={{

                  fontSize:" 0.8rem ",
                  fontWeight: 100

                }}>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </Link>
            </div>
          );
        })}
    </div>
  )
};

export default BlogList;