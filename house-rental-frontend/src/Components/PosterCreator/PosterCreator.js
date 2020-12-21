import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import PosterFromInput from './PosterFromInput';
import FacilityFromInput from './FacilityFromInput';
import ImageFromInput from './ImageFromInput';
import { apiImageUploader, apiPosterCreator } from '../../Services/accommodation_poster_services';
import classNames from 'classnames';
import './PosterCreator.css';

const { Step } = Steps;

function PosterCreator() {
	const [current, setCurrent] = React.useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};


	const [facilities, setFacilities] = useState({});

	const [posterInfo, setPosterInfo] = useState({});

	const [imageList, setImageList] = useState([]);

	const submitHandler = async (posterMoreInfo) => {
		try {
			console.log(posterInfo)
			if (posterInfo.images.length < 3) {
				return message.error("Bạn phải đăng tải tối thiểu 3 ảnh")
			}
			const imageUploadResponse = await apiImageUploader(posterInfo.images)
			console.log('imgae', imageUploadResponse)
			const data = {
				senderId: "5fa67e4a3023fd285005c10e",
				senderName: "Micheal",
				materialFacilitiesInfo: facilities,
				accommodationInfo: { ...posterInfo, ...posterMoreInfo, images: imageUploadResponse.files.map(image => image.path) },
			}
			const response = await apiPosterCreator(data)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	const steps = [
		{
			title: 'Thông tin chung',
			component: (
				<PosterFromInput
					next={next}
					setPosterInfo={setPosterInfo}
					posterInfo={posterInfo}
				/>
			),
			activeOrder: 0
		},
		{
			title: 'Tiện ích',
			component: (
				<FacilityFromInput
					setFacilities={setFacilities}
					next={next}
					prev={prev}
				/>
			),
			activeOrder: 1
		},
		{
			title: 'Mô tả',
			component: (
				<ImageFromInput
					setPosterInfo={setPosterInfo}
					posterInfo={posterInfo}
					setImageList={setImageList}
					imageList={imageList}
					prev={prev}
					submitHandler={submitHandler}
				/>
			),
			activeOrder: 2
		}
	];

	return (
		<div className="poster-creator-container">
			<div className="poster-creator">
				<Steps current={current}>
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
					<div className="steps-action">
						{current < steps.length - 1 && (
							<Button type="primary" onClick={() => next()} style={{ float: 'right', marginLeft: '10px' }}>
								Tiếp theo
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button type="primary" style={{ float: 'right', marginLeft: '10px' }}>
								Hoàn thành
							</Button>
						)}
						{current > 0 && (
							<Button
								style={{ margin: '0 8px', float: 'right', marginLeft: '10px' }}
								onClick={() => prev()}
							>
								Trở lại
							</Button>
						)}
					</div>
				</div>
			</div>
			);
		</div>
	)
}

export default PosterCreator;
