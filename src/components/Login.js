import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect , Route } from 'react-router-dom'


class Login extends Component {

	state = {
	    userSelected: null,
	    toHome: false
  	}

	handleChange = (event) => {
         this.setState({userSelected: event.target.value});
     }

	handleSubmit = (e) => {
		e.preventDefault()
		
		const { userSelected } = this.state
		const { dispatch } = this.props

		if(userSelected !== null){
			console.log(this.props)
			dispatch(setAuthedUser(userSelected))
			this.setState(() => ({
				userSelected: null,
				toHome: true
			}))
			
		}

	}

	render(){

	   const { toHome } = this.state

	   if (toHome === true ) {
	      return <Redirect to='/' push />
	    }


		return(
			<div>
				<h3>Log In</h3>
				<select onChange={this.handleChange} defaultValue=''>
				<option value=''> Please Select User </option>
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
	function mapStateToProps (  { users , authedUser} ) {

		// if( authedUser !== null ){
		// 	 return <Redirect to='/' push />
		// }

		return {
			usersSelect: users,
			authedUser : authedUser
		}
	}




export default connect(mapStateToProps)(Login);