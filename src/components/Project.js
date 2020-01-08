import React from 'react';
import BulletsContainer from '../containers/BulletsContainer'
import { Link } from 'react-router-dom'

const Project = (props) => {

  let project=props.projects.filter(p => p.id == props.match.params.id)[0]

  if (project){
  return (
    <div>
    <br></br>
    <> Project Name: {project.name} </>
    <button><Link to={`/projects/${project.id}/bullets`}>Edit Project</Link></button>
    <br></br>
    <> Days Left: {project.days_left} </>

    <BulletsContainer project={project}/>
    </div>
  )}
  else {
    return null
  }
}

export default Project
