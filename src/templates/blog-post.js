/**
 * Created by will on 04/09/18.
 */
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/blog-layout";


export default function Template({
                                   data
                                 }) {
  const post = data.markdownRemark;

  return (
    <Layout>
    <div className="blog-post-container">
      <Helmet title={`Mister Wip - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <hr
        // style={{
        //   marginBottom: rhythm(1),
        // }}
      />
      {/*<Bio />*/}
    </div>
    </Layout>

  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
          }
      }
  }
`
;