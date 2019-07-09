export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


 
export function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}



// export function handleAddQuestion (question) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()

//     return saveQuestion(question)
//       .then((question) => dispatch(addQuestion(question)))
//   }
// }

export function answerQuestion(question){
	return {
		type: ANSWER_QUESTION,
		question
	}
}

// export function handleAnswerQuestion (answer){

// 	return(dispatch, getState) => {
// 		const { authedUser } = getState()
// 		const question = { authedUser, ...answer }
// 		return saveQuestionAnswer(question)
// 		.then((question) => dispatch(answerQuestion(question)))
// 	}
// }


