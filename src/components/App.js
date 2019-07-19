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
        <Fragment>
          <SiteNav/>
          <Routes isLoggedIn = {this.props.isLoggedIn}/>
        </Fragment>  
        </Container>
       </Router>
      </div>
    )
  }
}

function Routes(props){

  const isLoggedIn = props.isLoggedIn === undefined ? false : props.isLoggedIn

  return (
    <div>
      <Switch>
        {
          isLoggedIn ? <Login/> :
            <Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/question/:id' exact component={QuestionPage} />
            <Route path='/leaderboard' exact component={LeaderBoardPage} />
            <Route component={PageNotFound} />
            </Fragment>
        }
      </Switch>
    </div>
  )
}


  function mapStateToProps ( { authedUser, users } ) {
    return {
      isLoggedIn: authedUser === null
    }
  }

export default connect(mapStateToProps)(App)