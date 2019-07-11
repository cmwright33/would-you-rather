import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion  } from '../actions/shared'


class QuestionCard extends Component {

	state = {

		answer: ''

	}

	handleChange = (e) => {
		const answer = e.target.value;
		this.setState({ answer })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		
		const { answer } = this.state
		const { dispatch, id } = this.props
		const qid = id;

		dispatch(handleAnswerQuestion({ qid, answer }));

	}
	render(){
		console.log(this.props.answered);
		return(

			<div className="question">
				<div> {this.props.author.avatarURL} </div>
				<div> {this.props.author.name} </div>
				<form className='save-question' onSubmit={this.handleSubmit}>
					<div>
						<input onChange={this.handleChange} type="radio" id="radio-one" name="notaswitch-two" value="optionOne" />
						<label htmlFor="radio-nine">{this.props.question.optionOne.text}</label><br />
					</div>
					<div> 
						<input onChange={this.handleChange} type="radio" id="radio-two" name="notaswitch-two" value="optionTwo" />
						<label htmlFor="radio-nine">{this.props.question.optionTwo.text}</label><br />
					</div>
					<Link to={`/question/${this.props.question.id}`} className='question'> <div>See Poll</div> </Link>
					<button
					className='btn'
            		type='submit'>
					Submit</button>
				</form>
			</div>
			)
	}

}
	function mapStateToProps ( { users , authedUser, questions }, { id } ) {

		return {
			users,
			authedUser,
			question: questions[id],
			author: users[authedUser] === undefined ? [] :  users[authedUser],
			answered: users[authedUser] === undefined ? [] : users[authedUser].answers[id]
		}
	}



export default connect(mapStateToProps)(QuestionCard);