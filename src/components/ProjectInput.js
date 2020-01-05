import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/addProject';

class ProjectInput extends React.Component{

  constructor(){
    super();

    let today = new Date()

    this.state = {
      name: '',
      description: '',
      deadline: today.toISOString().slice(0,-8)
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
      deadline: today.toISOString().slice(0,-8)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Bullet Project Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Required"/>
          <br></br>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} placeholder="Optional"/>
          <br></br>
          <label>Deadline(UTC):</label>
          <input type="datetime-local" name="deadline" value={this.state.deadline} onChange={this.handleOnChange}/>
          <br></br>
          <input type="submit" value="Create Project" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addProject})(ProjectInput);
