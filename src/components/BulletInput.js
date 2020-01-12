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
      complete: false,
      date: today.toJSON().slice(0,10)
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit = event => {
    let today = new Date();
    event.preventDefault();
    this.props.addBullet(this.state, this.props.project.id)
    console.log(this.state)
    this.setState({
      content: '',
      category: 'task',
      complete: false,
      date: today.toJSON().slice(0,10)
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
        <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/>
        <input type="submit" value="Enter" />
      </form>
      </div>
    )
  }
}

export default connect(null, {addBullet})(BulletInput)
