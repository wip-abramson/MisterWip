/**
 * Created by will on 04/09/18.
 */
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/blog-layout";
// import Box from '3box';
// import ThreeBoxComments from '3box-comments-react';
import Web3 from 'web3';

export default function Template({
                                   data
                                 }) {
  const post = data.markdownRemark;
  const adminEthAddr = "0xe4C9a592637Cfa7459746B8Ae2Fd3828553Ce236"

  // let [box, setBox] = React.useState(null);
  // let [space, setSpace] = React.useState(null);
  // let [userAccount, setUserAccount] = React.useState(null);
  //
  // React.useEffect(() => {
  //   if (window.ethereum) {
  //     let web3 = new Web3(window.ethereum)
  //     window.ethereum.enable().then(response => {
  //       console.log("User Account: ", response[0])
  //       setUserAccount(response[0]);
  //       initialiseComments(response[0]).then(() => {
  //         // Box.getSpace("")
  //       });
  //     }).catch(error => {
  //       // User denied account access
  //       console.log(error)
  //     })
  //   }
  //
  // }, [])

  // const initialiseComments = async function(userEthAddr) {
  //   console.log(window.ethereum)
  //   Box.openBox(userEthAddr, window.ethereum).then(new_box => {
  //     console.log(new_box);
  //     new_box.openSpace("Wip Abramson Blog", {}).then(new_space => {
  //       console.log(new_space)
  //       new_space.syncDone.then(() => {
  //         setBox(new_box)
  //         setSpace(new_space);
  //       })
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //
  //   }).catch(error => {
  //     console.log(error)
  //   })
  //   console.log("Box and space created")
  // }

  return (
    <Layout>
    <div className="blog-post-container">
      <Helmet title={`Will Abramson - ${post.frontmatter.title}`} />
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
      {/*{userAccount && box && space ? <ThreeBoxComments*/}
        {/*// required*/}
        {/*spaceName="Wip Abramson Blog"*/}
        {/*threadName={post.frontmatter.path}*/}
        {/*adminEthAddr={adminEthAddr}*/}


        {/*// Required props for context A) & B)*/}
        {/*box={box}*/}
        {/*currentUserAddr={null}*/}


        {/*// optional*/}
        {/*members={false}*/}
        {/*showCommentCount={10}*/}
        {/*// threadOpts={{}}*/}
        {/*useHovers={true}*/}
        {/*// currentUser3BoxProfile={currentUser3BoxProfile}*/}
        {/*// userProfileURL={address => `https://mywebsite.com/user/${address}`}*/}
      {/*/> : <h3><a href="https://3box.io/">3Box</a> commenting capability available for web3 browsers, install <a href="https://metamask.io/">metamask</a>.</h3>}*/}
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

