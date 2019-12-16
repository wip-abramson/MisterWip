/**
 * Created by will on 02/12/18.
 */
import React from 'react';
import {Link} from 'gatsby';

const BlogFooter = () => {
  return (
    <section>
    <h1>Thanks for reading</h1>
    <h3>If you have any questions, feel free to drop me an <a href="mailto://will.abramson@napier.ac.uk">email</a>.</h3>
    <ul className="actions">
      <li><Link to="blog" className="button">Back</Link></li>
    </ul>
  </section>)
}

export default BlogFooter;
