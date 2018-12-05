/**
 * Created by will on 24/11/18.
 */
import React from 'react';
import '../assets/scss/main.scss';
import BlogFooter from './BlogFooter';
import BlogHamburger from './BlogHamburger';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div id="blog-layout">
        <BlogHamburger/>
        {children}
        <BlogFooter/>
      </div>
    )
  }
}

export default Template;