import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink as RSNavLink } from 'reactstrap'; 



class SiteNav extends Component  {

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
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Would You Rather?</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem> 
              <RSNavLink>
              <NavLink to='/' exact activeClassName='active'>Home</NavLink>
              </RSNavLink>
            </NavItem>
            <NavItem> 
              <RSNavLink>
              <NavLink to='/new' exact activeClassName='active'>New Question</NavLink>
              </RSNavLink>
            </NavItem> 
            <NavItem> 
              <RSNavLink>
              <NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink>
              </RSNavLink>
            </NavItem> 
            {Welcome}
            <NavItem> 
              <RSNavLink>
              <NavLink to='/' onClick={this.logOutUser}exact activeClassName='active'> Log Out </NavLink>
              </RSNavLink>
            </NavItem> 
        </Nav>
      </Navbar>
      </div>
    )
  }
}

function mapStateToProps ( { state, authedUser, users} ) {

  return {
     activeUser: users[authedUser]
  }
 }

export default connect(mapStateToProps)(SiteNav);