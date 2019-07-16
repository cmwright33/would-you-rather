import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect , Route } from 'react-router-dom'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';


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
				<Col sm="12" md={{ size: 6, offset: 3 }}>
				<Card>
					<CardHeader h3>Log In</CardHeader>
					<CardBody>
					<CardText> Please Select A User To Log-In </CardText>
					<select onChange={this.handleChange} defaultValue=''>
					<option value=''> Please Select User </option>
					 {
						Object.values(this.props.usersSelect).map( (user) => {
						  return <option key={user.id} value={user.id}> { user.id } </option>
						})
					 }
					</select>
					<Button onClick={this.handleSubmit} >Submit</Button>
					</CardBody>
				</Card>
				</Col>
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