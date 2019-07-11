import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from "./QuestionCard.js";


class Home extends Component {

	render(){
		return(
			<div>
				<ul>
					{this.props.questionIds.map( (id) => (
						<QuestionCard key = { id } id = { id }/> 
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
			authUserAnswers: users[authedUser] === undefined ? [] : Object.keys(users[authedUser].answers)
		}
	}



export default connect(mapStateToProps)(Home);

