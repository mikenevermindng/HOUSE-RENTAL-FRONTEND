import http from './http';

const apiUserLikeAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('like/' + ratingId, { userId: userId });
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserUnlikeAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('unlike/' + ratingId, { userId: userId });
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserVisitAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('visit/' + ratingId);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserRatingAction = async (ratingId, data) => {
	try {
		const response = await http.patch('rating/' + ratingId, data);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { apiUserLikeAction, apiUserUnlikeAction, apiUserVisitAction, apiUserRatingAction };
