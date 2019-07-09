import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class Home extends Component {

	render(){
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

		// console.log(users[authedUser]);
		// const questionsAnswered = users[authedUser] !== undefined ? [] : Object.keys(users[authedUser].answers)
		
		
		return {
			questionIds: Object.keys(questions),
			users: users,
			answeredQuestions: 'questionsAnswered'
		}
	}



export default connect(mapStateToProps)(Home);

