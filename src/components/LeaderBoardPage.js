import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class LeaderBoard extends Component {

	render(){
		return(
			<div>
				<h2>LeaderBoard</h2>
			</div>
			)
	}

}
	function mapStateToProps ( { users, authedUser } ) {

		return {
			users: users,
		}
	}



export default connect(mapStateToProps)(LeaderBoard);