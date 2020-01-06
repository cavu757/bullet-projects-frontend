import React from 'react';
import BulletsContainer from '../containers/BulletsContainer'

const Project = (props) => {

  let project=props.projects.filter(p => p.id == props.match.params.id)[0]

  if (project){
  return (
    <div>
      <h3>Project Name: {project.name}</h3>
      <h4>Days Left: {project.days_left}</h4>
      <BulletsContainer project={project}/>
    </div>
  )}
  else {
    return null
  }
}

export default Project
