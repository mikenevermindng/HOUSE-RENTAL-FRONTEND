import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import PosterFromInput from './PosterFromInput';
import FacilityFromInput from './FacilityFromInput';
import ImageFromInput from './ImageFromInput';
import { apiImageUploader } from '../../Services/accommodation_services';
import './PosterCreator.css';

const { Step } = Steps;

function PosterCreator() {
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

	const facilityFormOnChangeHandler = (event) => {
		const facility = facilities;
		console.log(facilities);
		setFacilities({ ...facility, [event.target.name]: event.target.value });
	};

	const facilityFormOnSelectHandler = (label) => {
		const facility = facilities;
		console.log(facilities);
		if (label) {
			setPosterInfo({ ...facility, [label.name]: label.value });
		}
	};

	const posterInfoFormOnChangeHandler = (event) => {
		const posterInformation = posterInfo;
		console.log(posterInformation);
		setPosterInfo({ ...posterInformation, [event.target.name]: event.target.value });
	};

	const posterInfoFormOnSelectHandler = (label) => {
		const posterInformation = posterInfo;
		console.log(posterInformation);
		if (label) {
			setPosterInfo({ ...posterInformation, [label.name]: label.value });
		}
	};

	const submitFromHandler = async () => {
		const images = [ ...posterInfo.images ];
		const res = await apiImageUploader(images);
		console.log(res);
		message.success('Processing complete!');
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
					onChangeHandler={facilityFormOnChangeHandler}
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

	return (
		<div className="poster-creator">
			<Steps current={current}>{steps.map((item) => <Step key={item.title} title={item.title} />)}</Steps>
			<div className="steps-content">{steps[current].component}</div>
			<div className="steps-action">
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()} style={{ float: 'right', marginLeft: '10px' }}>
						Tiếp theo
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button type="primary" onClick={submitFromHandler} style={{ float: 'right', marginLeft: '10px' }}>
						Hoàn thành
					</Button>
				)}
				{current > 0 && (
					<Button
						style={{ margin: '0 8px' }}
						onClick={() => prev()}
						style={{ float: 'right', marginLeft: '10px' }}
					>
						Trở lại
					</Button>
				)}
			</div>
		</div>
	);
}

export default PosterCreator;
