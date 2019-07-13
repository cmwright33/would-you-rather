import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion  } from '../actions/shared'


class QuestionCard extends Component {

	render(){

		return(

			<div className="question-card">
				<div> {this.props.author.avatarURL} </div>
				<div> {this.props.author.name} </div>
				<div> {this.props.question.optionOne.text}</div>
				<Link to={`/question/${this.props.question.id}`} className='question'> <div>See Poll</div> </Link>
			</div>
			)
	}

}



	function mapStateToProps ( { users , authedUser, questions }, { id } ) {

		const question = questions[id];
		const author = users[question.author]; 


		return {
			users,
			authedUser,
			question: questions[id],
			author: author,
		}
	}



export default connect(mapStateToProps)(QuestionCard);