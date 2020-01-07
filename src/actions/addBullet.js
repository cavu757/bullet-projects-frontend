export const addBullet = (bullet, projectId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/bullets`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bullet)
    })
    .then(response => response.json())
    .then(project => dispatch({
      type: 'ADD_BULLET',
      payload: project
    }))
  }
}
