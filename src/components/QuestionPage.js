import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class QuestionPage extends Component {

	render(){
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



export default connect(mapStateToProps)(QuestionPage);