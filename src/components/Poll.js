import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion  } from '../actions/shared'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, Button, Progress, CustomInput } from 'reactstrap';
import '../css/Poll.css'


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

			<div className="poll-card">
				<Card>
					<CardHeader>{this.props.author.name} asked...</CardHeader>
					<Row>
					<Col>
						<CardImg src={this.props.author.avatarURL} alt="Card image cap" />
					</Col>
					<Col>
				{this.props.answered ? (
					<div className="poll-result">
					<CardTitle h3>Results:</CardTitle>
					<div className={"text-left " + (this.props.pollResults.answerSelected === 'optionOne' ? 'your-selection' : 'tetwetw') }>
						<CardText>{this.props.question.optionOne.text}</CardText>
						<Progress animated value={this.props.pollResults.optionOnePercent}>{this.props.pollResults.optionOne} / {this.props.pollResults.total }</Progress>
					</div>
        			<div className={"text-left " + (this.props.pollResults.answerSelected === 'optionTwo' ? 'your-selection-two' : 'werwew') } >
        				<CardText>{this.props.question.optionTwo.text}</CardText>
        				<Progress animated value={this.props.pollResults.optionTwoPercent}>{this.props.pollResults.optionTwo} / {this.props.pollResults.total }</Progress>
        			</div>
        			</div>
			      ) : (
			        <form className='save-question' onSubmit={this.handleSubmit}>
			     		<CardTitle>Would You Rather...</CardTitle>
						<CardText>
						<CustomInput type="radio" onChange={this.handleChange} id="radio-one" name="notaswitch-two" value="optionOne"  label={this.props.question.optionOne.text}/>
						</CardText>
						<div className="or-divider">OR</div>
						<CardText>
						<CustomInput type="radio" onChange={this.handleChange} id="radio-two" name="notaswitch-two" value="optionTwo"  label={this.props.question.optionTwo.text}/>
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
		console.log(question)
		const author = users[question.author]; 
		const answered = users[authedUser].answers[id] === undefined ? false : true;
		let answerSelected = '';
		if(answered){
			answerSelected = users[authedUser].answers[id]
			console.log(answerSelected === 'optionOne' ? true: false)
		}

		const total = question.optionOne.votes.length + question.optionTwo.votes.length;
		const pollResults = {
			optionOnePercent: question.optionOne.votes.length / total * 100,
			optionTwoPercent: question.optionTwo.votes.length / total * 100,
			optionOne: question.optionOne.votes.length ,
			optionTwo: question.optionTwo.votes.length ,
			total: total,
			answerSelected: answerSelected
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