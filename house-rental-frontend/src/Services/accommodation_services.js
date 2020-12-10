import http from './http';

const apiImageUploader = async (data) => {
	try {
		const formData = new FormData();
		const images = [ ...data ];
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

export { apiImageUploader };
