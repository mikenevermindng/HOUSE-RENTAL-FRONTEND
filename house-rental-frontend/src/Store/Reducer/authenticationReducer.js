import { authConstants } from '../../Constants/storeConstants';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case authConstants.SIGN_IN:
			return {
				loggedIn: true,
				user: action.payload
			};
		case authConstants.SIGN_OUT:
			return {};
		case authConstants.GET_USER_INFO:
			return state;
		default:
			return state;
	}
};

export default authReducer;
