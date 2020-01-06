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

export default connect()(App);
