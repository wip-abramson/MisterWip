import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>Researching identity and privacy-preserving cryptography
                      at the <strong><a target="_blank" href="https://identity-lab.napier.ac.uk/">BIL</a>, </strong><br/>
                      Edinburgh Napier University.<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
