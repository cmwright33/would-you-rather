import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/LeaderboardPage.css'
import { Card, CardImg, CardText, Col, Row,
  CardTitle } from 'reactstrap';

class LeaderBoard extends Component {

	render(){
		console.log(this.props.users)
		return(
			<div>
				{
					this.props.userKeys.map( key => (
						<Card key={key} className='leaderboard-content card col-sm-10 col-md-8 offset-md-2'>
							<Row>
								<Col>
									<CardImg src={this.props.users[key].avatarURL} alt="Card image cap" />
								</Col>
								<Col>
									<CardTitle>{ this.props.users[key].name }</CardTitle>
									<CardText>  Questions Asked : { this.props.users[key].questions.length }</CardText>
									<CardText>  Questions Answered : { Object.keys(this.props.users[key].answers).length }</CardText>
								</Col>
								<Col>
									<div className="total-score-container" > <span className="total-score-label" >Total Score</span><span className="total-score">{ Object.keys(this.props.users[key].answers).length + this.props.users[key].questions.length } Points </span></div>
								</Col>
							</Row>
						</Card>
					))
				}
			</div>
			)
	}

}
	function mapStateToProps ( { users, authedUser } ) {

		const userKeys = Object.keys(users)


		return {
			users: users,
			userKeys: userKeys.sort(  (a, b) => ( (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length )))
		}
	}



export default connect(mapStateToProps)(LeaderBoard);