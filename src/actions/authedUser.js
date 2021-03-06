export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER'

export function setAuthedUser (id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
    	type: SET_AUTHED_USER,
    	id,
      });

      resolve()
    });
  }
} 

export function receiveAuthedUser (id) {
  return {
    type: RECEIVE_AUTHED_USER,
    id,
  }
}
