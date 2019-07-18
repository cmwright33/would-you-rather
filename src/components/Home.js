import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import QuestionCard from "./QuestionCard.js";
import {Col} from 'reactstrap';


class Home extends Component {

	render(){

		return(
			<div className="home-container">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
				  <Tabs>
				    <TabList>
				      <Tab>Unanswered Questions</Tab>
				      <Tab>Answered Questions</Tab>
				    </TabList>
				    <TabPanel>
				      	<ul>
							{this.props.unansweredQuestions.map( (id) => (
								<QuestionCard key = { id } id = { id }/> 
							))}
						</ul>
				    </TabPanel>
				    <TabPanel>
				      	<ul>
							{this.props.authUserAnswers.map( (id) => (
								<QuestionCard key = { id } id = { id }/> 
							))}
						</ul>
				    </TabPanel>
				  </Tabs>
				</Col>
			</div>
			)
	}

}
	function mapStateToProps ( { questions, users, authedUser } ) {

		const questionIds = Object.keys(questions)
		const authUserAnswers = Object.keys(users[authedUser].answers).sort((a, b) => questions[a].timestamp - questions[b].timestamp)
		const unansweredQuestions = questionIds.filter(e => !authUserAnswers.includes(e)).sort((a, b) => questions[a].timestamp - questions[b].timestamp )


		return {
			questionIds: questionIds,
			users: users,
			authUserAnswers: authUserAnswers,
			unansweredQuestions: unansweredQuestions
		}
	}



export default connect(mapStateToProps)(Home);

