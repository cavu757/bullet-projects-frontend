import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/addProject';
import { Redirect } from 'react-router-dom';

class ProjectInput extends React.Component{

  constructor(){
    super();

    let today = new Date()

    this.state = {
      name: '',
      description: '',
      deadline: today.toJSON().slice(0,10),
      redirectToNewPage: false
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
    this.props.addProject(this.state)
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
        <form onSubmit={this.handleOnSubmit}>
          <label>Bullet Project Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Required"/>
          <br></br>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} placeholder="Optional"/>
          <br></br>
          <label>Deadline(UTC):</label>
          <input type="date" name="deadline" value={this.state.deadline} onChange={this.handleOnChange}/>
          <br></br>
          <input type="submit" value="Create Project" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addProject})(ProjectInput);
