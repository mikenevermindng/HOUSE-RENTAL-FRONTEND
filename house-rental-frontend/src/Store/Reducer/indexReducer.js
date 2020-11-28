import posterReducer from './posterReducer';
import authenticationReducer from './authenticationReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
	posters: posterReducer,
	auth: authenticationReducer
});

export default reducer;
