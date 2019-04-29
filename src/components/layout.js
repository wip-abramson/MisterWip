import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                <div id="main">
                  {children}
                </div>

            </div>
        )
    }
}

export default Template
