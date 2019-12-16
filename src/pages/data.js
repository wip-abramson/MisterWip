/**
 * Created by will on 01/12/18.
 */
/**
 * Created by will on 01/12/18.
 */
/**
 * Created by will on 01/12/18.
 */
/**
 * Created by will on 01/12/18.
 */
import React from "react";
import '../assets/css/blog-listing.css';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import BlogList from '../components/BlogList';
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
        <section id="one">
            <header className="major">
                <h2>Data</h2>
            </header>
            <p>After attending <a href="https://mydata2018.org" target="_blank">MyData 2018</a>, I became inspired by the ideas and <a href="https://mydata.org/mydata-101/data.js" target="_blank">vision</a> for a
                more human-centric data world. I am now a founding <a href="https://mydata.org/founders/data.js" target="_blank" >member</a> of MyData Global and am working to establish a Scottish MyData hub.
            </p>
            <p>I am increasingly concerned with the current data management practices and believe if we want to
                live is a fairer, more equal world then we have to move away from the data monopolies we see today.
                Giving individuals more control over their data flows, will enable everyone to benefit from the innovation we are starting to see driven by data.
            </p>
        </section>
      <BlogList posts={posts}/>
    </Layout>

  );
}
export const pageQuery = graphql`
    query MyDataQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/(MyData)/.*.md$/"}}) {
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
