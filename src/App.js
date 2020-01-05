import React from 'react';
import { connect } from 'react-redux';
import ProjectsContainer from './containers/ProjectsContainer'

class App extends React.Component {

  componentDidMount() {


  }

  render () {
    return (
    <div className="App">
      <ProjectsContainer/>
    </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects
//   }
// }

export default connect()(App);
