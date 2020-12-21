const posterReducerConstants = {
	SET_POSTER_LIST: 'SET_POSTER_LIST',
	ADD_POSTER: 'ADD_POSTER',
	REMOVE_POSTER: 'REMOVE_POSTER',
	MODIFY_POSTER: 'MODIFY_POSTER_LIST',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

const authConstants = {
	SIGN_IN: 'SIGN_IN',
	SIGN_OUT: 'SIGN_OUT',
	GET_USER_INFO: 'GET_USER_INFO'
};

const popupConstants = {
	OPEN: 'OPEN',
	CLOSE: 'CLOSE'
}

module.exports = {
	posterReducerConstants,
	authConstants,
	popupConstants
};
