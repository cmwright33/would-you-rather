import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import  Home  from './Home.js';
import  NewQuestion  from './NewQuestion.js';
import  Nav  from './Nav.js';
import  Login  from './Login.js';
import  QuestionPage  from './QuestionPage.js';
import  LeaderBoardPage from './LeaderBoardPage.js';
import  PageNotFound from './PageNotFound.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Router >
        { this.props.isLoggedIn ? ( 
          <Login />
        ) : (
        <Fragment>
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/new'  component={NewQuestion} />
            <Route path='/question/:id' component={QuestionPage} />
            <Route path='/leaderboard' component={LeaderBoardPage} />
            <Route component={PageNotFound} />
           </Switch>
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