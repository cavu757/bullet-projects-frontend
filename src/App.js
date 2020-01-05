import React from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from './actions/fetchProjects'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchProjects({type: 'FETCH_PROJECTS', payload: {name: 'My project'}})
  }

  render () {
    return (
    <div className="App">
      App
    </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects
//   }
// }

export default connect(null, {fetchProjects})(App);
