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
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

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

export { apiGetCommentById, apiPostComment, apiApprovedComment, apiDeleteComment };
