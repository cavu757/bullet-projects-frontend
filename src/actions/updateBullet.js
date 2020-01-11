export const updateBullet = (bullet) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${bullet.pId}/bullets/${bullet.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(bullet)
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'EDIT_BULLET', payload: project}))
  }
}
