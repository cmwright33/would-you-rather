import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'



class Nav extends Component  {

  logOutUser = (e) => {

    const { dispatch } = this.props
    dispatch(setAuthedUser(null));
  }

  render() {

   let Welcome;

   if (this.props.activeUser !== null) {
      Welcome =  <li>Hello {this.props.activeUser.name}</li>;
    } else {
      Welcome =  <li>Hello, Guest</li>;
    }

    return (
      <div>
        <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
         <li><NavLink to='/new' exact activeClassName='active'>New Question</NavLink></li>
          <li><NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink></li>
          {Welcome}
          <li><NavLink to='/' onClick={this.logOutUser}exact activeClassName='active'> Log Out </NavLink></li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ( { state, authedUser, users} ) {

  return {
     activeUser: users[authedUser]
  }
 }

export default connect(mapStateToProps)(Nav);