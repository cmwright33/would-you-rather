import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import  Home  from './Home.js';
import  Nav  from './Nav.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Nav/>
        {this.props.loggedOut === true
          ? null
          : 
          <Home />}
      </div>
    )
  }
}

  function mapStateToProps ( { authedUser } ) {
    return {
      loggedOut: authedUser === null 
    }
  }

export default connect(mapStateToProps)(App)