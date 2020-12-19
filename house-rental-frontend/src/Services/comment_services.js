import http from './http';

const apiGetCommentById = async (commentId) => {
	try {
		const response = await http.get('comment/' + commentId);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiPostComment = async (data) => {
	try {
		const response = await http.post('comment/', data);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiGetCommentByPosterId = async (posterId) => {
	try {
		const response = await http.get('comment/posterComment/' + posterId)
		return response.data
	} catch (error) {
		console.log(error)
		return []
	}
}

const apiGetCommentByRatingId = async (ratingId) => {
	try {
		const response = await http.get('comment/ratingComment/' + ratingId)
		return response.data
	} catch (error) {
		console.log(error)
		return []
	}
}

const apiApprovedComment = async (commentId) => {
	try {
		const response = await http.patch('comment/' + commentId);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiDeleteComment = async (commentId) => {
	try {
		const response = await http.delete('comment/' + commentId);
		console.log(response);
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { apiGetCommentById, apiPostComment, apiApprovedComment, apiDeleteComment, apiGetCommentByPosterId, apiGetCommentByRatingId };
