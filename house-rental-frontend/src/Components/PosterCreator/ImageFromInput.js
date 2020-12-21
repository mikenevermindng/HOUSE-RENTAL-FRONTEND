import React, { useState, useEffect } from 'react';
import { Upload, Modal, message, Input, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const { TextArea } = Input;

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
	const { posterInfo, setPosterInfo, prev, submitHandler } = props;

	const backToPrevStep = (e) => {
		e.preventDefault()
		prev()
	}

	const validateSchema = Yup.object().shape({
		description: Yup.string()
			.min(500, "Bài đăng nên được mô tả tối thiểu 500 kí tự")
			.max(3000, "Bài đăng không nên được môt tả bởi quá 3000 kí tự")
			.required("bắt buộc")
	})

	const formik = useFormik({
		initialValues: {
			description: '',
		},
		validationSchema: validateSchema,
		onSubmit: (values) => {
			submitHandler({ description: values.description })
		},
	})

	const {
		values,
		touched,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
	} = formik;

	const { description } = values;

	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState([]);

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
			<div style={{ marginTop: 8 }}>Đăng ảnh</div>
		</div>
	);

	const imageFilter = (image) => {
		if (image.type === "image/svg+xml") {
			return true
		}
		if (image.type === "image/jpeg") {
			if (image.size < 200000) {
				message.error("Kích thước ảnh quá nhỏ")
			}
			return image.size > 200000
		} else {
			if (image.size < 1000000) {
				message.error("Kích thước ảnh quá nhỏ")
			}
			return image.size > 1000000
		}
	}

	const changeHandler = ({ fileList }) => {
		if (fileList.length > 12) {
			message.error("Không thể đăng tải quá 12 ảnh")
		}
		setFileList(fileList.filter((file) => file.type.split('/')[0] === 'image' && imageFilter(file)).slice(0, 12));
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
		name: "images",
		onPreview: handlePreview,
		onChange: changeHandler,
		customRequest: dummyRequest
	};

	useEffect(
		() => {
			setPosterInfo({ ...posterInfo, images: fileList });
		},
		[fileList]
	);

	return (
		<form onSubmit={handleSubmit}>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={24}>
					<div className="input-label">Thêm mô tả về nơi ở của bạn</div>
				</Col>
			</Row>
			<div>
				<TextArea
					rows={4}
					maxLength={3000}
					name="description"
					onChange={handleChange('description')}
					onBlur={handleBlur('description')}
				/>
				{errors.description && touched.description && <span>{errors.description}</span>}
			</div>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={24}>
					<div className="input-label">Thêm ảnh nơi ở của bạn (tối thiểu 3 ảnh)</div>
				</Col>
			</Row>
			<Upload {...properties}>{fileList.length >= 12 ? null : uploadButton}</Upload>
			<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
			<button onClick={backToPrevStep}>Back</button>
			<button type="submit">submit</button>
		</form>
	);
}

export default ImageFromInput;
