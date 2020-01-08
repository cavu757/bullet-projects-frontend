import React from 'react';
import { Link } from 'react-router-dom';

const Events = (props) => {

  let events=props.events
  let sortedEvents = events.sort(function(a,b){
  return new Date(a.date) - new Date(b.date)
  });

  return (
    <div>
      {sortedEvents && sortedEvents.map(e =>
        <div key={e.id}> {e.date} - <Link to={`/projects/${e.project_id}`}>{e.content}</Link></div>)}
    </div>
  )
}

export default Events
