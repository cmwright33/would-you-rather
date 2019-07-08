import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class Home extends Component {

	render(){
		console.log(this.props)
		return(
			<div>
				<Question id = {this.props.match.params.id} />
			</div>
			)
	}

}
	function mapStateToProps ( { users, authedUser } ) {

		return {
			users: users,
		}
	}



export default connect(mapStateToProps)(Home);