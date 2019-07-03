import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {

	render(){
		console.log(this.props)
		return(
			<div className="question">
				<div> {this.props.author.avatarURL} </div>
				<div> {this.props.author.name} </div>
				<div> {this.props.question.optionOne.text}</div>
				<div> {this.props.question.optionTwo.text}</div>
			</div>
			)
	}

}
	function mapStateToProps ( { users , authedUser, questions }, { id } ) {
		const question = questions[id];
		const author = users[question.author]

		return {
			authedUser,
			question: question,
			author: author
		}
	}



export default connect(mapStateToProps)(Question);