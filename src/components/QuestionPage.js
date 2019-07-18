import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from "./Poll.js";
import {Col} from 'reactstrap';
import { Redirect } from 'react-router-dom'


class QuestionPage extends Component {


	render(){
		if(this.props.questions[this.props.match.params.id] === undefined) {
		    return <Redirect to='/' />
		}
		return(
			<div className="question-page">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Poll id = {this.props.match.params.id} />
				</Col>
			</div>
			)
	}

}
	function mapStateToProps ( { users, authedUser, questions } ) {

		

		return {
			users: users,
			questions: questions
		}
	}



export default connect(mapStateToProps)(QuestionPage);