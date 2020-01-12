import React from 'react';
import BulletsContainer from '../containers/BulletsContainer'
import { Link } from 'react-router-dom';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';


const ProjectInfo = (props) => {
  return(
  <OverlayTrigger
    placement="right"
    delay={{show:250, hide: 100}}
    overlay={
      <Popover>
        <Popover.Content>
          {props.project.description? props.project.description : "No description"}
        </Popover.Content>
      </Popover>
    }>
      <span className="projectInfoDescription"> i </span>
  </OverlayTrigger>
  )
}

const Project = (props) => {

  let project=props.projects.filter(p => p.id == props.match.params.id)[0]

  if (project){
  return (
    <div>
    <br></br>
    Project Name: {project.name}
    <ProjectInfo project={project}/>
    <br></br>
    Days Left: {project.days_left}
    <br></br>
    <Button variant="link" size="lg"><Link to={`/projects/${project.id}/edit`}>Edit Project</Link></Button>
    <BulletsContainer project={project}/>
    </div>
  )}
  else {
    return null
  }
}

export default Project
