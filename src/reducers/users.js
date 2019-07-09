import	{ RECEIVE_USERS , QUESTION_ANSWERED_BY_USER , ADD_QUESTION_TO_USER } from '../actions/users'


export default function	users (state= {}, action) {
	switch (action.type) {
		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}
		case ADD_QUESTION_TO_USER :
	      const { question , author, id } = action.question
		      return {
		        ...state,
		        [author]: {
		          ...state[author],
		          questions: state[author].questions.concat([id])
		        }
		      }
		case QUESTION_ANSWERED_BY_USER : 
			const { qid, authedUser, answer } = action.question
			return {
				...state,
		        [authedUser]: {
		          ...state[authedUser],
		          answers: {
		            ...state[authedUser].answers,
		            [qid]: answer
		          }
		        }
			}
		default : 
			return state
	}
}