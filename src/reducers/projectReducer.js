
export default function projectReducer(state = {projects: [], events: []}, action) {

  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {...state, projects: action.payload}
    case 'FETCH_ALL_EVENTS':
      return {...state, events: action.payload}
    case 'ADD_PROJECT':
      return {...state, projects: [...state.projects, action.payload]}
    case 'ADD_BULLET':
      let projects = state.projects.map(project => {
        if (project.id === action.payload.id){
          return action.payload
        } else {
          return project
        }})
      return {...state, projects: projects}
    case 'DELETE_BULLET':
      let projectsDel = state.projects.map(project => {
        if (project.id === action.payload.id){
          return action.payload
        } else {
          return project
        }})
      return {...state, projects: projectsDel}
    default:
      return state
  }
}
