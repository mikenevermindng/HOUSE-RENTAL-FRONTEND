import http from './http';

const apiImageUploader = async (data) => {
	try {
		const formData = new FormData();
		const images = [...data];
		images.forEach((img) => {
			formData.append('images', img.originFileObj);
		});
		const response = await http.post('accommodationPost/imageUploader', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
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
		const response = await http.post('accommodationPost/', data);
		console.log(response);
		return response.data;
	} catch (error) {
		return null;
	}
};

const apiGetPoster = async (filterOption) => {
	try {
		const response = await http.get('accommodationPost/', { filterOption: filterOption });
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const apiGetPosterById = async (posterId) => {
	try {
		const response = await http.get('accommodationPost/' + posterId);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUpdateUnapprovedPoster = async (posterId, data) => {
	try {
		const response = await http.put('accommodationPost/' + posterId, data);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiDeletePoster = async (posterId) => {
	try {
		const response = await http.delete('accommodationPost/' + posterId);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export {
	apiImageUploader,
	apiPosterCreator,
	apiGetPoster,
	apiGetPosterById,
	apiUpdateUnapprovedPoster,
	apiDeletePoster
};
