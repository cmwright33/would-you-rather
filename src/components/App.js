import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import  Home  from './Home.js';
import  Nav  from './Nav.js';
import  Login  from './Login.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Nav/>
        {this.props.isLoggedIn ? ( 
          <Login />
        ) : (
          <Home />
        )}
      </div>
    )
  }
}

  function mapStateToProps ( { authedUser } ) {
    return {
      isLoggedIn: authedUser === null 
    }
  }

export default connect(mapStateToProps)(App)