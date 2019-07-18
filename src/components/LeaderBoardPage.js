import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, Col, Row, CardHeader,
  CardTitle, Button } from 'reactstrap';

class LeaderBoard extends Component {

	render(){
		console.log(this.props.users)
		return(
			<div>
				{
					this.props.userKeys.map( key => (
						<Card className='card col-sm-10 col-md-8 offset-md-2'>
							<Row>
								<Col>
									<CardImg src={this.props.users[key].avatarURL} alt="Card image cap" />
								</Col>
								<Col className="leaderboard-content">
									<CardTitle>{ this.props.users[key].name }</CardTitle>
									<CardText>  has asked: { this.props.users[key].questions.length } Questions</CardText>
									<CardText>  has answered: { Object.keys(this.props.users[key].answers).length } Questions</CardText>
								</Col>
								<Col>
									<div>  for a total of : { Object.keys(this.props.users[key].answers).length + this.props.users[key].questions.length } Points</div>
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
			userKeys: userKeys
		}
	}



export default connect(mapStateToProps)(LeaderBoard);