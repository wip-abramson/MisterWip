import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar center"><img src={avatar} alt="" /></Link>
                  <h1><div style={{textDecoration: "underline"}}>Historical Site</div> New professional self-presentation can be found at <a style={{fontWeight: "600px"}} target="_blank" href="https://drwip.com">drwip.com.</a></h1>
                    {/*<h1>Building expressive, flexible and extendable crypto<br/graphically secured communication tools that support forming human trust in digital relationships.*/}
                  {/*</h1>*/}
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
