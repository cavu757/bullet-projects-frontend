import React from 'react';
import { connect } from 'react-redux';
import Bullet from './Bullet'
import BulletShow from './BulletShow'
import { deleteBullet } from '../actions/deleteBullet';
import { updateBullet } from '../actions/updateBullet';
import { Link, Redirect } from 'react-router-dom'

class BulletEdit extends React.Component {

  constructor(props){
    super(props);
    if(props.bullet){
      this.state = {
        content: props.bullet.content,
        category: props.bullet.category,
        complete: props.bullet.complete,
        date: props.bullet.date
      }}
    else {
      this.state = {
        redirectToProjects: true
      }}
    }

  toggleComplete = event => {
    this.setState({
      complete: !this.state.complete
    })
  }


  handleDelete = event => {
    this.props.deleteBullet(this.props.bullet.id, this.props.bullet.project_id)
    this.setState({
      content: '',
      category: '',
      complete: false,
      date: '',
      redirectToBullets: true
    })
  }


  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit = event => {
    let today = new Date();
    event.preventDefault();
    let bullet = {...this.state, pId: this.props.bullet.project_id, id: this.props.bullet.id};
    this.props.updateBullet(bullet);
    this.setState({
      content: '',
      category: 'task',
      complete: false,
      date: today.toJSON().slice(0,10),
      redirectToBullets: true
    })
  }

  render(){

    if (this.state.redirectToBullets){
      return(
        <Redirect to={{
          pathname: `/projects/${this.props.bullet.project_id}`,
          }}
        />
      )
    }

    if (this.state.redirectToProjects){
      return(
        <Redirect to={{
          pathname: '/projects',
          }}
        />
      )
    }

    return(
      <div>
      <br></br>
      <Link to={`/projects/${this.props.bullet.project_id}`}> Back to Project </Link>
      <br></br>
      <form onSubmit={this.handleOnSubmit}>
        <select name="category" value={this.state.category} onChange={this.handleOnChange}>
          <option>task</option>
          <option>event</option>
          <option>note</option>
        </select>
        <input type="text" name="content" value={this.state.content} onChange={this.handleOnChange} placeholder="Enter bullet..."/>
        <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/>
        <input type="submit" value="Update Bullet" />
      </form>
      <br></br><BulletShow bullet={this.state}/>
      <button onClick={this.handleDelete}> delete </button>
      <button onClick={this.toggleComplete}> {this.state.complete ? "mark NOT complete" : "mark complete"} </button>
      </div>
    )
  }
}

export default connect(null, {deleteBullet, updateBullet})(BulletEdit)
