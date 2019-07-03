import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {

	render(){
		return(
			<div>
				<ul>
					{this.props.questionIds.map( (id) => (
						<li key={id}> {id}</li>
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

