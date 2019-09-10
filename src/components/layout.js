import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Helmet from 'react-helmet'
import laptopImg from '../assets/images/laptop.jpg'


class Template extends React.Component {
    render() {
        const { children } = this.props
      const siteTitle = 'Will Abramson'
      const siteDescription = 'Will Abramson\'s personal space in the digital realm. Thoughts on technology, identity, data and more'

        return (
            <div>
              <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription}/>
              </Helmet>
              {/*<div>                    <img src={laptopImg}/>*/}
              {/*</div>*/}
              <div>
                <Header />

                <div id="main">

                  {children}
                </div>
              </div>


            </div>
        )
    }
}

export default Template
