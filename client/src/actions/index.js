import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
}

// //the below is the same code
// export const fetchUser = () => {
// 	return function(dispatch) { //when we return a function with redux thunk it will automatically call that function with dispatch
// 		axios
// 			.get('/api/current_user')
// 			.then(res => dispatch({ type: FETCH_USER, payload: res }))
// 	}
// };
