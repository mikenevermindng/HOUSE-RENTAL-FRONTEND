import http from './http';

const apiUserLikeAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('rating/like/' + ratingId, { userId: userId }, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserUnlikeAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('rating/unlike/' + ratingId, { userId: userId }, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserVisitAction = async (ratingId, userId) => {
	try {
		const response = await http.patch('rating/visit/' + ratingId, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUserRatingAction = async (ratingId, data) => {
	try {
		const response = await http.patch('rating/' + ratingId, data, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { apiUserLikeAction, apiUserUnlikeAction, apiUserVisitAction, apiUserRatingAction };
