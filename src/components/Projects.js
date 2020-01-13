import React from 'react';

import {Link} from 'react-router-dom'

const Projects = (props) => {

  if (props.projects.length>0){

  let sortedProjects = props.projects.sort(function(a,b){
  return a.days_left - b.days_left
  });

  return (
    <div>
      <br></br>
      Current Project(s): 
      {sortedProjects.map(project =>
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}><span className="blue">{project.bullets.length}</span> {project.name}</Link> (Days Left: {project.days_left})
        </div>)}
    </div>
  )}
  else {
  return (
    <div>
    <br></br>Blank state, create something :)
    </div>
  )
  }
}

export default Projects;
