import React from 'react';
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import ProjectOverview from '../components/ProjectOverview';

const ProjectsIndex = () => {

  const siteTitle = "Will Abramson"
  const siteDescription = "Will Abramson's personal space in the digital realm. Thoughts on technology, identity, data and more"


  return (

    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>


      <div className="project-tiles">
        {/*<div className="column one">*/}
          <ProjectOverview title="Privacy Preserving Cryptography"/>

          <ProjectOverview title="MyData Scotland"/>

          <ProjectOverview title="The Commons Stack"/>
        {/*</div>*/}

        {/*<div className="column two">*/}
          <ProjectOverview title="Truu"/>

          <ProjectOverview title="Climate Change"/>

          <ProjectOverview title="My Blog"/>
        {/*</div>*/}


      </div>






    </Layout>
  )
}

export default ProjectsIndex;