import { getInitialData , saveQuestion, saveQuestionAnswer} from '../utils/api'
import { receiveUsers , addQuestionUser , answerQuestionByUser } from '../actions/users'
import { receiveQuestions , addQuestion , answerQuestion} from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = null;

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}


export function handleAddQuestion (question) {
  return (dispatch, getState) => {

    return saveQuestion(question)
      .then((question) => {
      	dispatch(addQuestion(question)) 
      	dispatch(addQuestionUser(question)) 
      })
  }
}



export function handleAnswerQuestion (answer){

	return(dispatch, getState) => {
		const { authedUser } = getState()
		const question = { authedUser, ...answer }
		return saveQuestionAnswer(question)
		.then((question) => {
				dispatch(answerQuestion(question))
				dispatch(answerQuestionByUser(question))
			}
		)
	}
}