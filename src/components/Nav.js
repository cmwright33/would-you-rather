import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



class Nav extends Component  {
  render() {
    return (
      <div>
        <ul>
          <NavLink to='/' exact activeClassName='active'> 
            Home
          </NavLink>
          <NavLink to='/new' exact activeClassName='active'> 
             New Question
          </NavLink>
          <li>Leaderboard</li>
          <li>Heloo Blah Blah</li>
          <NavLink to='/login' exact activeClassName='active'> 
             Log Out
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Nav;