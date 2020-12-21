import posterReducer from './posterReducer';
import authenticationReducer from './authenticationReducer';
import isShowPopupReducer from './isShowLoginPopupReducer'
import isShowPosterCreatorReducer from './isShowPosterCreatorReducer'

import { combineReducers } from 'redux';

const reducer = combineReducers({
	posters: posterReducer,
	auth: authenticationReducer,
	isShowLoginPopup: isShowPopupReducer,
	isShowPosterCreatorReducer: isShowPosterCreatorReducer
});

export default reducer;
