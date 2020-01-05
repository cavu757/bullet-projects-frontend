import React from 'react';

const Projects = (props) => {

  return (
    <div>
      {props.projects.map(project => <li key={project.id}> {project.name} due on {project.deadline}</li>)}
    </div>
  )
}

export default Projects;
