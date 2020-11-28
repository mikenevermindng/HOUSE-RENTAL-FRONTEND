import { posterReducerConstants } from '../../Constants/storeConstants';

const posterReducer = (state = [], action) => {
	switch (action.type) {
		case posterReducerConstants.SET_POSTER_LIST:
			return [ ...action.payload ];
		case posterReducerConstants.ADD_POSTER:
			return [ ...state, action.payload ];
		case posterReducerConstants.REMOVE_POSTER:
			return removePoster(state, action.payload);
		case posterReducerConstants.MODIFY_POSTER:
			return modifyPoster(state, action.payload);
		default:
			return state;
	}
};

const removePoster = (state, payload) => {
	console.log(payload);
	const index = state.findIndex((poster) => poster._id === payload.posterId);
	console.log(index);
	return [ ...state.slice(0, index), ...state.slice(index + 1) ];
};

const modifyPoster = (state, payload) => {
	const { posterId, modifiedData } = payload;
	const index = state.findIndex((poster) => poster._id === posterId);
	const poster = state[index];
	poster = { ...poster, ...modifiedData };
	return state;
};

export default posterReducer;
