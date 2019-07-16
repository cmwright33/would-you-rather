import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion  } from '../actions/shared'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class QuestionCard extends Component {

	render(){

		return(

			<div className="question-card">
				<Card>
					<CardHeader>{this.props.author.name} asked...</CardHeader>
					<Row>
					<Col>
						<CardImg src={this.props.author.avatarURL} alt="Card image cap" />
					</Col>
					<Col>
						<CardText>{this.props.question.optionOne.text}</CardText>
						<Button><Link to={`/question/${this.props.question.id}`} className='question'>See Poll</Link></Button>
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


		return {
			users,
			authedUser,
			question: questions[id],
			author: author,
		}
	}



export default connect(mapStateToProps)(QuestionCard);