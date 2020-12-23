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
				'Content-Type': 'multipart/form-data',
				authorization: sessionStorage.getItem('ownerToken')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiPosterCreator = async (data, type) => {
	try {
		let authorization = ''
		if (type === 'owner') {
			authorization = sessionStorage.getItem('ownerToken')
		} else {
			authorization = sessionStorage.getItem('adminToken')
		}
		const response = await http.post('accommodationPost/', data, {
			headers: {
				authorization: authorization
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
				authorization: sessionStorage.getItem('adminToken')
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const apiUserGetPosters = async (filterData, page, perPage) => {
	try {
		const response = await http.post('accommodationPost/userGetPoster', { filterData, page, perPage }, {
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

const apiGetFavoritesPosterForUser = async () => {
	try {
		const response = await http.get('/accommodationPost/getFavoritesPoster', {
			headers: {
				authorization: localStorage.getItem('token')
			}
		})
		return response.data
	} catch (error) {
		console.log(error)
		return []
	}
}

const aptGetPosterByOwnerId = async (ownerId) => {
	try {
		const response = await http.get('accommodationPost/getWithFilterOptions/', {
			headers: {
				authorization: sessionStorage.getItem('ownerToken')
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
				authorization: sessionStorage.getItem('token')
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
				authorization: sessionStorage.getItem('ownerToken')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const apiUpdateAvailableDate = async (posterId, availableDate) => {
	try {
		const response = await http.put('accommodationPost/updateAvailableDate/' + posterId, availableDate, {
			headers: {
				authorization: sessionStorage.getItem('ownerToken')
			}
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
}

const apiDeletePoster = async (posterId) => {
	try {
		const response = await http.delete('accommodationPost/' + posterId, {
			headers: {
				authorization: sessionStorage.getItem('adminToken')
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
				authorization: sessionStorage.getItem('adminToken')
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
				authorization: sessionStorage.getItem('ownerToken')
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
	apiUserGetPosters,
	apiGetFavoritesPosterForUser,
	apiUpdateAvailableDate
};
