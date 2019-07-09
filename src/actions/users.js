export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const QUESTION_ANSWERED_BY_USER = 'QUESTION_ANSWERED_BY_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}


export function addQuestionUser (question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  }
}


export function answerQuestionByUser(question){
	return {
		type: QUESTION_ANSWERED_BY_USER,
		question
	}
}