import React from 'react';
import Events from '../components/Events'

class EventsContainer extends React.Component {

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

export default EventsContainer
