
export default function projectReducer(state = {projects: []}, action) {
  
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {projects: action.payload}
    case 'ADD_PROJECT':
      return {...state, projects: [...state.projects, action.payload]}
    default:
      return state
  }
}
