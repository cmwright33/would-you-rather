import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, Button } from 'reactstrap';
import '../css/QuestionCard.css'


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
					<Col className="question-content">
						<CardTitle>Would You Rather...</CardTitle>
						<CardText>{this.props.question.optionOne.text}...</CardText>
						<Link to={`/question/${this.props.question.id}`} className='question'><Button>See Poll</Button></Link>
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