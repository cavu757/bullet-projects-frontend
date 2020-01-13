import React from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../actions/deleteProject';
import { updateProject } from '../actions/updateProject';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

class ProjectEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: props.project.name,
      description: props.project.description || '',
      deadline: props.project.deadline
    }
  }

  handleDelete = event => {
    this.props.deleteProject(this.props.project.id);
    let today = new Date();
    this.setState({
      name: '',
      description: '',
      deadline: today.toJSON().slice(0,10),
      redirectToProjects: true
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    let today = new Date();
    event.preventDefault();
    let project = {...this.state, id: this.props.project.id}
    this.props.updateProject(project)
    this.setState({
      name: '',
      description: '',
      deadline: today.toJSON().slice(0,10),
      redirectToNewPage: true
    })
  }

  render(){

    if (this.state.redirectToProjects){
      return(
        <Redirect to={{
          pathname: '/projects/',
          }}
        />
      )
    }

    if (this.state.redirectToNewPage){
      let id = this.props.project.id
      return(
        <Redirect to={{
          pathname: `/projects/${id}`,
          }}
        />
      )
    }

    return(
      <div>

        <br></br>
        <Form>
          <Form.Group controlId="projectEditName">
          <Form.Label>Bullet Project Name:</Form.Label>
          <Form.Control type="text" name="name" style={{width: "500px"}} size="lg" value={this.state.name} onChange={this.handleOnChange} placeholder="Required"/>
          </Form.Group>
          <Form.Group controlId="projectEditDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" size="lg" rows="3" name="description" style={{width: "500px"}} value={this.state.description} onChange={this.handleOnChange} placeholder="Optional"/>
          </Form.Group>
          <Form.Group controlId="projectEditDeadline">
          <Form.Label>Deadline:</Form.Label>
          <Form.Control style={{width: "300px"}} size="lg" type="date" name="deadline" value={this.state.deadline} onChange={this.handleOnChange}/>
          </Form.Group>

          <Button as="input" variant="outline-primary" type="submit" size="lg" value="Update" readOnly onClick={this.handleOnSubmit} />
          <Button variant="outline-danger" size="lg" onClick={e=> window.confirm("Delete this project?") && this.handleDelete(e)}> delete </Button>
          <Button variant="link" size="lg"><Link to={`/projects/${this.props.project.id}`}> Back to Project </Link></Button>

        </Form>

      </div>
    )
  }
}

export default connect(null, {updateProject, deleteProject})(ProjectEdit);
