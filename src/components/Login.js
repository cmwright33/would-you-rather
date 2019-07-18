import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import '../css/Login.css'
import { Card, CardText, Col, Row, CardHeader,
 CardBody, Button } from 'reactstrap';


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
			<div className="log-in">
				<Row>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
				<Card>
					<CardHeader>Log In</CardHeader>
					<CardBody>
					<CardText> Please Select A User To Log-In </CardText>
					<select className="form-control-lg form-control" onChange={this.handleChange} defaultValue=''>
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
				</Row>
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