import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion  } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import { Col, Button, Card, CardHeader, CardBody, CardTitle, CardText, Form, FormGroup, Input, Label } from 'reactstrap';


class NewQuestion extends Component {


	state ={
		optionOneText: '',
		optionTwoText: '',
		author: this.props.author,
		toHome: false,
		
	}

	handleChange = (e) => {		

		if(e.target.className === 'q1'){	
			const optionOneText = e.target.value 
			this.setState({ optionOneText })
			
		}else{
			const optionTwoText = e.target.value 
			this.setState({ optionTwoText })
			
		}


	}


	handleSubmit = (e) => {

		e.preventDefault()

	    const { optionOneText, optionTwoText , author } = this.state
	    const { dispatch } = this.props

	    dispatch(handleAddQuestion({ optionOneText, optionTwoText , author }))

	    this.setState(() => ({
	      optionOneText: '' , optionTwoText: '', toHome: true
	    }))


	}

	render(){
		   const { toHome } = this.state


		   if (toHome === true) {
		      return <Redirect to='/' />
		    }

		return(
			<div className="newQuestion">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
				<Card>
					<CardHeader >Create New Question</CardHeader>
					<CardBody>
						<CardTitle> Complete the question </CardTitle>
						<CardText> Would You Rather... </CardText>
						<Form className='text-center' onSubmit={this.handleSubmit}>
						    <FormGroup row>
					          <Label for="q1" sm={3} size="md">Option 1</Label>
					          <Col sm={8}>
					            <Input className='q1' onChange={this.handleChange } placeholder="Enter Option One Text Here" bsSize="md" />
					          </Col>
					        </FormGroup>
					        <CardText className='text-center'>OR</CardText>
							<FormGroup row>
					          <Label for="q1" sm={3} size="md">Option 2</Label>
					          <Col sm={8}>
					            <Input className='q2' onChange={this.handleChange } placeholder="Enter Option Two Text Here" bsSize="md" />
					          </Col>
					        </FormGroup>
							<Button
							className='btn'
		            		type='submit'
		            		disabled={ (this.state.optionOneText === '' && this.state.optionTwoText === '' ) }>
							Submit</Button>
						</Form>
					</CardBody>
				</Card>
				</Col>
			</div>
			)
	}

}
	function mapStateToProps ( { users , authedUser, questions } ) {

		return {
			author: authedUser

		}
	}



export default connect(mapStateToProps)(NewQuestion);