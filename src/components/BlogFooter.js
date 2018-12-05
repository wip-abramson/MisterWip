/**
 * Created by will on 02/12/18.
 */
import React from 'react';
import {Link} from 'gatsby';

const BlogFooter = () => {
  return (
    <section>
    <h1>Thanks for reading</h1>
    <ul className="actions">
      <li><Link to="blog" className="button">Back</Link></li>
    </ul>
  </section>)
}

export default BlogFooter;