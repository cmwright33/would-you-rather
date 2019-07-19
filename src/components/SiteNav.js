import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import '../css/SiteNav.css'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';



class SiteNav extends Component  {

  logOutUser = (e) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null));
  }

  render() {

   let Welcome;

   if (this.props.activeUser !== undefined) {
      Welcome =  <NavItem> Hello, {this.props.activeUser.name}</NavItem> ;
    } else {
      Welcome =  <NavItem>Hello, Guest</NavItem>;
    }

    return (
      <div>
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Would You Rather?</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink to='/' exact activeClassName='active'>Home</NavLink></NavItem>
            <NavItem><NavLink to='/add' exact activeClassName='active'> New Question </NavLink></NavItem> 
            <NavItem><NavLink to='/leaderboard' exact activeClassName='active'> Leaderboard </NavLink></NavItem> 
            {Welcome}
            <NavItem><NavLink to='/' onClick={this.logOutUser}exact activeClassName='active'> Log Out </NavLink></NavItem> 
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