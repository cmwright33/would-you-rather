import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class Home extends Component {

	render(){
		console.log(this.props.users)
		return(
			<div>
				<ul>
					{this.props.questionIds.map( (id) => (
						<Question key = { id }id = { id }/>
					))}
				</ul>
			</div>
			)
	}

}
	function mapStateToProps ( { questions, users, authedUser } ) {

		return {
			questionIds: Object.keys(questions),
			users: users,
			// answeredQuestions: questions.filter( word => word.length > 6)

		}
	}



export default connect(mapStateToProps)(Home);

