import { posterReducerConstants } from '../../Constants/storeConstants';

const setPosterList = (list) => {
	return {
		type: posterReducerConstants.SET_POSTER_LIST,
		payload: list
	};
};

const addPoster = (poster) => {
	return {
		type: posterReducerConstants.ADD_POSTER,
		payload: poster
	};
};

const removePoster = (posterId) => {
	return {
		type: posterReducerConstants.REMOVE_POSTER,
		payload: {
			posterId
		}
	};
};

const modifyPoster = (posterId, modifiedData) => {
	return {
		type: posterReducerConstants.MODIFY_POSTER,
		payload: {
			posterId,
			modifiedData
		}
	};
};

export { setPosterList, addPoster, removePoster, modifyPoster };
