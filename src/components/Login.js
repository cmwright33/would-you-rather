import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {

	state = {
	    userSelected: '',
  	}

	handleChange = (event) => {
         this.setState({userSelected: event.target.value});
     }

	handleSubmit = (e) => {
		e.preventDefault()
		
		const { userSelected } = this.state
		const { dispatch } = this.props

		dispatch(setAuthedUser(userSelected))

		this.setState(() => ({
			userSelected: '',
		}))

	}

	render(){
		return(
			<div>
				<h3>Log In</h3>
				<select onChange={this.handleChange} value={this.state.userSelected}>
				 {
					Object.values(this.props.usersSelect).map( (user) => {
					  return <option key={user.id} value={user.id}> { user.id } </option>
					})
				 }
				</select>
				<button onClick={this.handleSubmit} >Submit</button>
			</div>
			)
	}

}
	function mapStateToProps ( { users } ) {
		return {
			usersSelect: users
		}
	}




export default connect(mapStateToProps)(Login);