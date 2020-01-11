export const updateProject = (project) => {
  
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${project.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'EDIT_PROJECT', payload: project}))
  }
}
