import posterReducer from './posterReducer';
import authenticationReducer from './authenticationReducer';
import isShowPopupReducer from './isShowLoginPopupReducer'

import { combineReducers } from 'redux';

const reducer = combineReducers({
	posters: posterReducer,
	auth: authenticationReducer,
	isShowLoginPopup: isShowPopupReducer
});

export default reducer;
