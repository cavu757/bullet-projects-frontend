import React from 'react';

const Projects = (props) => {

  return (
    <div>
      {props.projects.map(project => <li key={project.id}> {project.name} - Days Left: {project.days_left}</li>)}
    </div>
  )
}

export default Projects;
