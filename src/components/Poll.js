import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion  } from '../actions/shared'


class Poll extends Component {

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
		
		return(

			<div className="question">
				<div> {this.props.author.avatarURL} </div>
				<div> {this.props.author.name} </div>

				{this.props.answered ? (
					<div>
        			<div> Option One {this.props.pollResults.optionOne} / { this.props.pollResults.total}</div>
        			<div> Option Two {this.props.pollResults.optionTwo} / { this.props.pollResults.total}</div>
        			</div>
			      ) : (
			        <form className='save-question' onSubmit={this.handleSubmit}>
						<div>
							<input onChange={this.handleChange} type="radio" id="radio-one" name="notaswitch-two" value="optionOne" />
							<label htmlFor="radio-nine">{this.props.question.optionOne.text}</label><br />
						</div>
						<div> 
							<input onChange={this.handleChange} type="radio" id="radio-two" name="notaswitch-two" value="optionTwo" />
							<label htmlFor="radio-nine">{this.props.question.optionTwo.text}</label><br />
						</div>
						<button
						className='btn'
	            		type='submit'>
						Submit</button>
					</form>
			      )}			
			</div>
			)
	}

}
	function mapStateToProps ( { users , authedUser, questions }, { id } ) {

		const question = questions[id];
		const author = users[question.author]; 
		const answered = users[authedUser].answers[id] === undefined ? false : true;
		const total = question.optionOne.votes.length + question.optionTwo.votes.length;
		const pollResults = {
			optionOne: question.optionOne.votes.length,
			optionTwo: question.optionTwo.votes.length,
			total: question.optionOne.votes.length + question.optionTwo.votes.length
		}

		return {
			users,
			authedUser,
			question: questions[id],
			author: author,
			answered: answered,
			pollResults: pollResults
		}
	}



export default connect(mapStateToProps)(Poll);