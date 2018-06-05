import { FETCH_USER } from '../actions/types';

export default function(state = null, action) { //set state to null instead of {} for base case of not knowing whether user is signed in or not (long load time possibility)
	// console.log(action);
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;  // a trick for if action.payload is '' ('' || false === false)
		default:
			return state;
	}
}
