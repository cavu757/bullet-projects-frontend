import React from 'react';

import {Link} from 'react-router-dom'

const Projects = (props) => {

  return (
    <div>
      <br></br>
      {props.projects.map(project =>
        <div key={project.id}>
          ({project.bullets.length}) <Link to={`/projects/${project.id}`}>{project.name}</Link> (Days Left: {project.days_left})

        </div>)}
    </div>
  )
}

export default Projects;
