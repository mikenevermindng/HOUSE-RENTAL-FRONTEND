import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import PosterFromInput from './PoterFromInput';
import FacilityFromInput from './FacilityFromInput';
import ImageFromInput from './ImageFromInput';
import axios from 'axios';
import { objectToFormData } from '../../Helper/covertToFormData';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const { Step } = Steps;

function PoterCreator() {
	const [ current, setCurrent ] = React.useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const [ other, setOther ] = useState([]);

	const [ facilities, setFacilities ] = useState({});

	const [ posterInfo, setPosterInfo ] = useState({});

	const [ imageList, setImageList ] = useState([]);

	const facilitiyFormOnChangeHandler = (event) => {
		const facilitiy = facilities;
		console.log(facilities);
		setFacilities({ ...facilitiy, [event.target.name]: event.target.value });
	};

	const facilityFormOnSelectHandler = (label) => {
		const facilitiy = facilities;
		console.log(facilities);
		if (label) {
			setPosterInfo({ ...facilitiy, [label.name]: label.value });
		} else {
			delete facilitiy[label.name];
			setPosterInfo({ ...facilitiy });
		}
	};

	const posterInfoFormOnChangeHandler = (event) => {
		const posterInfomation = posterInfo;
		console.log(posterInfomation);
		setPosterInfo({ ...posterInfomation, [event.target.name]: event.target.value });
	};

	const posterInfoFormOnSelectHandler = (label) => {
		const posterInfomation = posterInfo;
		console.log(posterInfomation);
		if (label) {
			setPosterInfo({ ...posterInfomation, [label.name]: label.value });
		} else {
			delete posterInfomation[label.name];
			setPosterInfo({ ...posterInfomation });
		}
	};

	const steps = [
		{
			title: 'First',
			component: (
				<PosterFromInput
					onChangeHandler={posterInfoFormOnChangeHandler}
					setPosterInfo={setPosterInfo}
					posterInfo={posterInfo}
					posterInfoFormOnSelectHandler={posterInfoFormOnSelectHandler}
				/>
			)
		},
		{
			title: 'Second',
			component: (
				<FacilityFromInput
					other={other}
					setOther={setOther}
					onChangeHandler={facilitiyFormOnChangeHandler}
					facilityFormOnSelectHandler={facilityFormOnSelectHandler}
				/>
			)
		},
		{
			title: 'Last',
			component: (
				<ImageFromInput
					setPosterInfo={setPosterInfo}
					posterInfo={posterInfo}
					setImageList={setImageList}
					imageList={imageList}
				/>
			)
		}
	];

	const submitFromHandler = async () => {
		const formData = new FormData();

		console.log(posterInfo.images);

		const images = [ ...posterInfo.images ];
		/**
		 * Thay cai imageList cua em dang rong khong ? 
		 * The thi lam sao append dc :v 
		 * :v để e thử
		 * van dang thay rong
		 */
		images.forEach((img) => {
			formData.append('images', img);
		});
		/**
		 * neu ma co gi thi xem  o kia phai dc co :v 
		 * 
		 * :<< em chịu luôn, k hiểu 
		 */
		console.log(formData.toString()); // cai nay dang khong co gi nay
		await axios.post(
			'http://localhost:3001/accommodationPost/imageUploader',
			{
				formData
			},
			{ 'Content-Type': 'multipart/form-data' }
		);

		message.success('Processing complete!');
	};

	return (
		<div style={{ maxWidth: '600px' }}>
			<Steps current={current}>{steps.map((item) => <Step key={item.title} title={item.title} />)}</Steps>
			<div className="steps-content">{steps[current].component}</div>
			<div className="steps-action">
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						Previous
					</Button>
				)}
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()}>
						Next
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button type="primary" onClick={submitFromHandler}>
						Done
					</Button>
				)}
			</div>
		</div>
	);
}

export default PoterCreator;
