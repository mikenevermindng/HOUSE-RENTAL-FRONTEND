import React, { useState, useEffect } from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

const dummyRequest = ({ file, onSuccess }) => {
	setTimeout(() => {
		onSuccess('ok');
	}, 0);
};

function ImageFromInput(props) {
	const { posterInfo, setPosterInfo } = props;

	const [ previewVisible, setPreviewVisible ] = useState(false);
	const [ previewImage, setPreviewImage ] = useState('');
	const [ previewTitle, setPreviewTitle ] = useState('');
	const [ fileList, setFileList ] = useState([]);

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	const handleChange = ({ fileList }) => {
		setFileList(fileList.filter((file) => file.type.split('/')[0] === 'image').slice(0, 12));
	};

	const properties = {
		action: 'http://localhost:3001/accommodationPost/upload',
		listType: 'picture-card',
		fileList,
		beforeUpload: (file) => {
			const validate = file.type.split('/')[0] !== 'image';
			if (validate) {
				message.error(`${file.name} không phải là ảnh`);
			}
			return !validate;
		},
		multiple: true,
		accept: 'image/*',
		onPreview: handlePreview,
		onChange: handleChange,
		customRequest: dummyRequest
	};

	useEffect(
		() => {
			console.log(fileList);
			setPosterInfo({ ...posterInfo, images: fileList });
			console.log(posterInfo);
		},
		[ fileList ]
	);
	return (
		<div>
			<Upload {...properties}>{fileList.length >= 12 ? null : uploadButton}</Upload>
			<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</div>
	);
}

export default ImageFromInput;
