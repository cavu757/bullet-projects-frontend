
export default function projectReducer(state = {projects: [], events: [], project: []}, action) {

  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {...state, projects: action.payload}
    case 'FETCH_ONE_PROJECT':
      return {...state, project: action.payload}
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
    case 'EDIT_PROJECT':
      let projects_edit = state.projects.map(project => {
        if (project.id === action.payload.id){
          return action.payload
        } else {
          return project
        }})
      return {...state, projects: projects_edit}
    case 'EDIT_BULLET':
      let projects_bul_edit = state.projects.map(project => {
        if (project.id === action.payload.id){
          return action.payload
        } else {
          return project
        }})
      return {...state, projects: projects_bul_edit}
    case 'DELETE_BULLET':
      let projects_bul_del = state.projects.map(project => {
        if (project.id === action.payload.id){
          return action.payload
        } else {
          return project
        }})
      return {...state, projects: projects_bul_del}
    case 'DELETE_PROJECT':
      return {...state, projects: action.payload}
    default:
      return state
  }
}
