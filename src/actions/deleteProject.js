export const deleteProject = (projectId) => {
  
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(projects => dispatch({
      type: 'DELETE_PROJECT',
      payload: projects
  }))
  }
}
