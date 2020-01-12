import React from 'react';
import { Link } from 'react-router-dom';

const Events = (props) => {

  let events=props.events
  let sortedEvents = events.sort(function(a,b){
  return new Date(a.date) - new Date(b.date)
  });
  if (sortedEvents.length>0){
  return (
    <div>
      Upcoming Events
      <br></br>
      {sortedEvents && sortedEvents.map(e =>
        <div key={e.id}> {e.date.slice(5)} / <Link to={`/projects/${e.project_id}`}>{e.content}</Link> ({e.project.name})</div>)}
    </div>
  )}
  else {
    return (
      <div>
      Did not find any upcoming events :(
      </div>
    )
  }
}

export default Events
