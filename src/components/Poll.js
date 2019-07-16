import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion  } from '../actions/shared'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, CardSubtitle, Button, Progress } from 'reactstrap';


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
				<Card>
					<CardHeader>{this.props.author.name} asked...</CardHeader>
					<Row>
					<Col>
						<CardImg src={this.props.author.avatarURL} alt="Card image cap" />
					</Col>
					<Col>
				{this.props.answered ? (
					<div>
					<div className="text-center">
						Option One
						<Progress animated value={this.props.pollResults.optionOne} />
					</div>
        			<div>
        				Option Two 
        				<Progress animated value={this.props.pollResults.optionTwo} />
        			</div>
        			</div>
			      ) : (
			        <form className='save-question' onSubmit={this.handleSubmit}>
						<CardText>
							<input onChange={this.handleChange} type="radio" id="radio-one" name="notaswitch-two" value="optionOne" />
							<label htmlFor="radio-nine">{this.props.question.optionOne.text}</label><br />
						</CardText>
						<CardText>
							<input onChange={this.handleChange} type="radio" id="radio-two" name="notaswitch-two" value="optionTwo" />
							<label htmlFor="radio-nine">{this.props.question.optionTwo.text}</label><br />
						</CardText> 
						<Button
						className='btn'
	            		type='submit'>
						Submit</Button>
					</form>
			      )}
					</Col>
					</Row>
				</Card>			
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
			optionOne: question.optionOne.votes.length / total * 100,
			optionTwo: question.optionTwo.votes.length / total * 100,
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