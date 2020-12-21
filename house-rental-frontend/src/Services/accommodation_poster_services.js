import http from './http';
import axios from 'axios'

const apiImageUploader = async (data) => {
	try {
		const formData = new FormData();
		const images = [...data];
		images.forEach((img) => {
			formData.append('images', img.originFileObj);
		});
		const response = await http.post('accommodationPost/imageUploader', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				authorization: localStorage.getItem('ownerToken')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiPosterCreator = async (data) => {
	try {
		const response = await http.post('accommodationPost/', data, {
			headers: {
				authorization: localStorage.getItem('ownerToken')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		return null;
	}
};

const apiGetPoster = async (filterOption) => {
	try {
		const response = await http.get('accommodationPost/', { filterOption }, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const apiUserGetPosters = async () => {
	try {
		const response = await http.get('accommodationPost/userGetPoster', {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const aptGetPosterByOwnerId = async (ownerId) => {
	try {
		const response = await http.get('accommodationPost/getWithFilterOptions/', {
			headers: {
				authorization: localStorage.getItem('ownerToken')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
}

const apiGetPosterById = async (posterId) => {
	try {
		const response = await http.get('accommodationPost/' + posterId, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUpdatePoster = async (posterId, data) => {
	try {
		const response = await http.put('accommodationPost/' + posterId, data, {
			headers: {
				authorization: localStorage.getItem('ownerToken')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiDeletePoster = async (posterId) => {
	try {
		const response = await http.delete('accommodationPost/' + posterId, {
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

const apiApprovedPoster = async (posterId) => {
	try {
		const response = await http.patch('accommodationPost/' + posterId, {}, {
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
}

const apiUpdatePosterStatus = async (posterId, status) => {
	try {
		const response = await http.patch('accommodationPost/updateStatus/' + posterId, { status }, {
			headers: {
				authorization: localStorage.getItem('ownerToken')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
}


export {
	apiImageUploader,
	apiPosterCreator,
	apiGetPoster,
	apiGetPosterById,
	apiUpdatePoster,
	apiDeletePoster,
	aptGetPosterByOwnerId,
	apiApprovedPoster,
	apiUpdatePosterStatus,
	apiUserGetPosters
};
