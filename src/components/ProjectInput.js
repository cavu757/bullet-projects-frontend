import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/addProject';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

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
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="projectInputName">
          <Form.Label>Bullet Project Name:</Form.Label>
          <Form.Control type="text" name="name" style={{width: "500px"}} size="lg" value={this.state.name} onChange={this.handleOnChange} placeholder="Required"/>
          </Form.Group>
          <Form.Group controlId="projectInputDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" size="lg" rows="3" name="description" style={{width: "500px"}} value={this.state.description} onChange={this.handleOnChange} placeholder="Optional"/>
          </Form.Group>
          <Form.Group controlId="projectInputDeadline">
          <Form.Label>Deadline:</Form.Label>
          <Form.Control style={{width: "300px"}} size="lg" type="date" name="deadline" value={this.state.deadline} onChange={this.handleOnChange}/>
          <br></br>
          <Button variant="outline-primary" type="submit" size="lg">Create Project</Button>
          <Button variant="link" size="lg"><Link to={'/projects'}> Back to Projects </Link></Button>
          </Form.Group>

        </Form>

      </div>
    )
  }
}

export default connect(null, {addProject})(ProjectInput);
