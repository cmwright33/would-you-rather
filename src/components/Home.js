import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class Home extends Component {

	render(){
		console.log(this.props.authUserAnswers)

		return(
			<div>
				<ul>
					{this.props.authUserAnswers.map( (id) => (
						<Question key = { id } id = { id }/> 
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

