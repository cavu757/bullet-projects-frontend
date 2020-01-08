import React from 'react';
import Events from '../components/Events'
import {fetchAllEvents} from '../actions/fetchAllEvents';
import { connect } from 'react-redux';

class EventsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAllEvents();
  }

  render(){

    let events = this.props.events

    return(
      <div>
        <br></br>
        Upcoming Events
        <Events events={events}/>
      </div>
    )
  }
}

export default connect (null, {fetchAllEvents})(EventsContainer)
