import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from "./QuestionCard.js";


class QuestionPage extends Component {

	render(){
		return(
			<div>
				<QuestionCard id = {this.props.match.params.id} />
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