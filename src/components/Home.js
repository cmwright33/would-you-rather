import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question.js";


class Home extends Component {

	render(){
		return(
			<div>
				<ul>
					{this.props.questionIds.map( (id) => (
						<Question key = { id }id = { id }/>
					))}
				</ul>
			</div>
			)
	}

}
	function mapStateToProps ( { questions } ) {
		return {
			questionIds: Object.keys(questions)
		}
	}



export default connect(mapStateToProps)(Home);

