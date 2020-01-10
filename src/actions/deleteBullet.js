export const deleteBullet = (bulletId, projectId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}/bullets/${bulletId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({
      type: 'DELETE_BULLET',
      payload: project
    }))
    }
}
