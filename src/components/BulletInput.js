import React from 'react';
import { connect } from 'react-redux';
import { addBullet } from '../actions/addBullet';

class BulletInput extends React.Component {

  constructor(){
    super();
    let today = new Date()

    this.state = {
      content: '',
      category: 'task',
      priority: false,
      date: today.toISOString().slice(0,-8)
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleOnSubmit = event => {
    let today = new Date();
    event.preventDefault();
    console.log(this.state)
    this.props.addBullet(this.state, this.props.id)
    this.setState({
      content: '',
      category: 'task',
      priority: false,
      date: today.toISOString().slice(0,-8)
    })
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <select name="category" value={this.state.category} onChange={this.handleOnChange}>
          <option>task</option>
          <option>event</option>
          <option>note</option>
        </select>
        <input type="text" name="content" value={this.state.content} onChange={this.handleOnChange} placeholder="Enter bullet..."/>
        <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleOnChange}/>
        <input type="submit" value="Create Bullet" />
      </form>
      </div>
    )
  }
}

export default connect(null, {addBullet})(BulletInput)
