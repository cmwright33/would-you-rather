import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from "./Poll.js";
import {Col} from 'reactstrap';


class QuestionPage extends Component {

	render(){
		return(
			<div>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Poll id = {this.props.match.params.id} />
				</Col>
			</div>
			)
	}

}
	function mapStateToProps ( { users, authedUser } ) {


		return {
			users: users,
		}
	}



export default connect(mapStateToProps)(QuestionPage);