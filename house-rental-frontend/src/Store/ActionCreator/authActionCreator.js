import { authConstants } from '../../Constants/storeConstants';

const signIn = (userInfo) => {
	return {
		type: authConstants.SIGN_IN,
		payload: userInfo
	};
};

const signOut = () => {
	return {
		type: authConstants.SIGN_OUT
	};
};

const getUserInfo = () => {
	return {
		type: authConstants.GET_USER_INFO
	};
};

export {
	signIn,
	signOut,
	getUserInfo
};
