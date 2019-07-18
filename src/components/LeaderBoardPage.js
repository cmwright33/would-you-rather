import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class LeaderBoard extends Component {

	render(){
		console.log(this.props.users)
		return(
			<div>
				{
					this.props.userKeys.map( key => (
						<Fragment>
						<div> { this.props.users[key].name }</div>
						<div>  has asked: { this.props.users[key].questions.length } Questions</div>
						<div>  has answered: { Object.keys(this.props.users[key].answers).length } Questions</div>
						<div>  for a total of : { Object.keys(this.props.users[key].answers).length + this.props.users[key].questions.length } Points</div>
						</Fragment>
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