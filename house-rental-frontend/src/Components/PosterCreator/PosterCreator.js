import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import PosterFromInput from './PosterFromInput';
import FacilityFromInput from './FacilityFromInput';
import ImageFromInput from './ImageFromInput';
import { apiImageUploader } from '../../Services/accommodation_poster_services';
import classNames from 'classnames';
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
		console.log('facility', facilities);
		setFacilities({ ...facility, [event.target.name]: event.target.value });
	};

	const facilityFormOnSelectHandler = (label) => {
		const facility = facilities;
		console.log('facility', facilities);
		if (label) {
			setFacilities({ ...facility, [label.name]: label.value });
		}
	};

	const facilityFormOnRemoveHandler = (item) => {
		return () => {
			const others = facilities.other;
			const index = others.indexOf((fac) => fac === item);
			console.log('facility', facilities);
		};
	};

	const posterInfoFormOnChangeHandler = (event) => {
		const posterInformation = posterInfo;
		console.log('poster', posterInformation);
		setPosterInfo({ ...posterInformation, [event.target.name]: event.target.value });
	};

	const posterInfoFormOnSelectHandler = (label) => {
		const posterInformation = posterInfo;
		console.log('poster', posterInformation);
		if (label) {
			setPosterInfo({ ...posterInformation, [label.name]: label.value });
		}
	};

	const posterDatePickerHandler = (date, dateString) => {
		const posterInformation = posterInfo;
		console.log(posterInformation);
		if (date) {
			console.log(date);
			setPosterInfo({
				...posterInformation,
				avaliableDate: { date: date.map((time) => time._d), dateString: dateString }
			});
		} else {
			setPosterInfo({
				...posterInformation,
				avaliableDate: null
			});
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
					posterDatePickerHandler={posterDatePickerHandler}
				/>
			),
			activeOrder: 0
		},
		{
			title: 'Second',
			component: (
				<FacilityFromInput
					other={other}
					setOther={setOther}
					onChangeHandler={facilityFormOnChangeHandler}
					facilityFormOnSelectHandler={facilityFormOnSelectHandler}
					facilityFormOnRemoveHandler={facilityFormOnRemoveHandler}
				/>
			),
			activeOrder: 1
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
			),
			activeOrder: 2
		}
	];

	return (
		<div className="poster-creator">
			<Steps size="small" current={current}>
				{steps.map((item) => <Step key={item.title} title={item.title} />)}
			</Steps>
			<div className="steps-content">
				{steps.map((step) => {
					return (
						<div key={step.title} className={classNames({ 'display-none': step.activeOrder !== current })}>
							{step.component}
						</div>
					);
				})}
			</div>
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
