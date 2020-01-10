import React from 'react';
import { connect } from 'react-redux';

import { updateProject } from '../actions/updateProject';
import { Redirect } from 'react-router-dom';

class ProjectEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: props.project.name,
      description: props.project.description || '',
      deadline: props.project.deadline
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    let today = new Date();
    event.preventDefault();
    this.props.updateProject(this.state)
    this.setState({
      name: '',
      description: '',
      deadline: today.toJSON().slice(0,10),
      redirectToNewPage: true
    })
  }

  render(){

    if (this.state.redirectToNewPage){
      return(
        <Redirect to="/projects"/>
      )
    }

    return(
      <div>
        <br></br>
        <form onSubmit={this.handleOnSubmit} >
          <label>Bullet Project Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Required"/>
          <br></br>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} placeholder="Optional"/>
          <br></br>
          <label>Deadline:</label>
          <input type="date" name="deadline" value={this.state.deadline} onChange={this.handleOnChange}/>
          <br></br>
          <input type="submit" value="Update Project" />
        </form>
      </div>
    )
  }
}

export default connect(null, {updateProject})(ProjectEdit);