import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion  } from '../actions/shared'
import { Link, withRouter, Redirect } from 'react-router-dom'


class NewQuestion extends Component {


	state ={
		optionOneText: '',
		optionTwoText: '',
		author: this.props.author,
		toHome: false,
		
	}

	handleChange = (e) => {

		const question = e.target.value 
		

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
				<h2>Create New Question </h2>
				<div> Complete the question </div>
				<div> Would you rather... </div>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<input className='q1' onChange={this.handleChange } placeholder="Enter Option One Text Here"></input>
					<div> OR </div>
					<input className='q2' onChange={this.handleChange } placeholder="Enter Option Two Text Here"></input>
					<button
					className='btn'
            		type='submit'
            		disabled={ (this.state.optionOneText === '' && this.state.optionTwoText === '' ) }>
					Submit</button>
				</form>
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