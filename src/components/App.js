import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import  Home  from './Home.js';
import  NewQuestion  from './NewQuestion.js';
import  Nav  from './Nav.js';
import  Login  from './Login.js';
import  QuestionPage  from './QuestionPage.js';
import  LeaderBoardPage from './LeaderBoardPage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Router>
        <Nav/>
        { this.props.isLoggedIn ? ( 
          <Login />
        ) : (
        <Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/new'  component={NewQuestion} />
          <Route path='/login' component={Login} />
          <Route path='/question/:id' component={QuestionPage} />
          <Route path='/leaderboard' component={LeaderBoardPage} />
        </Fragment>  
          )}
       </Router>
      </div>
    )
  }
}

  function mapStateToProps ( { authedUser, users } ) {
    return {
      isLoggedIn: authedUser === null
    }
  }

export default connect(mapStateToProps)(App)