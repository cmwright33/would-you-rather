import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import QuestionCard from "./QuestionCard.js";



class Home extends Component {

	render(){

		return(
			<div>
			  <Tabs>
			    <TabList>
			      <Tab>Unanswered</Tab>
			      <Tab>Answered</Tab>
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
			</div>
			)
	}

}
	function mapStateToProps ( { questions, users, authedUser } ) {

		const questionIds = Object.keys(questions)
		const authUserAnswers = Object.keys(users[authedUser].answers)
		const unansweredQuestions = questionIds.filter(e => !authUserAnswers.includes(e))
		
		return {
			questionIds: questionIds,
			users: users,
			authUserAnswers: authUserAnswers,
			unansweredQuestions: unansweredQuestions
		}
	}



export default connect(mapStateToProps)(Home);

