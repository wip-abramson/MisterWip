import React from 'react'

import Layout from '../components/layout'
import RecentBlogs from '../components/RecentBlogs'
import { Link } from 'gatsby'
import laptopImg from '../assets/images/laptop.jpg'


class HomeIndex extends React.Component {


  render() {

    return (
      <Layout>



        <section id="one">
          <header className="major">
            {/* <Link to='/projects'  className="button">TEST</Link> */}

            <h2>How might we ensure that the digital systems we create today are resilient to a future we cannot predict?</h2>
            <h2>What metrics can a Verifier use to assess the risks associated with trusting a credential presentation transaction?</h2>

            <li><h3>How can we have anonymity in identity systems while retaining trust and accountability?</h3></li>
          </header>
          <ul>

            <li><h3>How might we define cryptographic policies based on top of Verifiable Credentials?</h3></li>
            <li><h3>How does Self-Sovereign Identity fit into national identity management systems?</h3></li>
            <li><h3>How might we take steps to prevent the technology we create today being misused in the future?</h3>
            </li>
            <li><h3>What measures can we take to ensure that freedom, instead of being a rare exception, will become the
              normal, natural and stable condition for ourselves and our descendants? <i>- <a
                href="http://www.davidbrin.com/transparentsociety.html" target="_blank">The Transparent Society</a></i>
            </h3></li>
            <li><h3>Will the Self-Sovereign Identity model be a viable alternative before the majority of the world's
              population is involved in one oppressive system or another?</h3></li>
            <li><h3>How might we use our existing legal and social constructs to emphasise the value of this new model
              for identity?</h3></li>
            <li><h3>How might we begin to build systems that will empower the next generation of digital citizens?</h3>
            </li>

          </ul>
        </section>
        <section id="one">
          <header className="major">
            <h2>Papers I am Currently Processing</h2>
            <p>Please ask me about them!</p>
          </header>
          <ul>
            <li><h3><a href="https://acmccs.github.io/papers/p683-camenischA.pdf" target="_blank">Practical UC-Secure
              Delegatable Credentials with Attributes and Their Application to Blockchain</a></h3></li>
            <li><h3><a href="https://researcher.watson.ibm.com/researcher/files/zurich-ANJ/main_nymlog.pdf"
                       target="_blank">Privacy-Preserving User-Auditable Pseudonym Systems</a></h3></li>

          </ul>

        </section>
        <section id="three">
          <RecentBlogs/>
          <ul className="actions">
            <li><Link to="blog" className="button">View More</Link></li>
          </ul>
        </section>


      </Layout>
    )
  }
}

export default HomeIndex
