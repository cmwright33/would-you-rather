import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import  Home  from './Home.js';
import  NewQuestion  from './NewQuestion.js';
import  SiteNav  from './SiteNav.js';
import  Login  from './Login.js';
import  QuestionPage  from './QuestionPage.js';
import  LeaderBoardPage from './LeaderBoardPage.js';
import  PageNotFound from './PageNotFound.js'
import '../css/App.css'
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="app-container">
        <Router >
        <Container>
        { this.props.isLoggedIn ? ( 
          <Switch>
          <Login />
          </Switch>
        ) : (
        <Fragment>
          <SiteNav/>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add'  component={NewQuestion} />
          <Route path='/question/:id' component={QuestionPage} />
          <Route path='/leaderboard' component={LeaderBoardPage} />
          <Route component={PageNotFound} />
          </Switch>
        </Fragment>  
          )}
        </Container>
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