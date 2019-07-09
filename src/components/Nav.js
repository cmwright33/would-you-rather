import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



class Nav extends Component  {

  render() {

   let Welcome;

   if (this.props.activeUser !== undefined) {
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
          <li><NavLink to='/login' exact activeClassName='active'> Log Out </NavLink></li>
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