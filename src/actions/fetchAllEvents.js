
export function fetchAllEvents() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/all_events')
      .then(response => response.json())
      .then(events => dispatch({
        type: 'FETCH_ALL_EVENTS',
        payload: events
      }))
  }
}
