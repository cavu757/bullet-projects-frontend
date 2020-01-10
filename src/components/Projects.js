import React from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../actions/deleteProject';
import {Link} from 'react-router-dom'

const Projects = (props) => {

  const handleDelete = (project) => {
    props.deleteProject(project.id)
  }

  return (
    <div>
      <br></br>
      {props.projects.map(project =>
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link> (Days Left: {project.days_left})
          <button onClick={()=>handleDelete(project)}> delete </button>
        </div>)}
    </div>
  )
}

export default connect(null, {deleteProject})(Projects);
