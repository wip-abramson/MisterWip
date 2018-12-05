import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Researching and building the Self Sovereign future of identity <br/>
                      at the <strong><a target="_blank" href="https://identity-lab.napier.ac.uk/">Blockpass Identity Lab</a> </strong><br/>
                      Edinburgh Napier University.<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
