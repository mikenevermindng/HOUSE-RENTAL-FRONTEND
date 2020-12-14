import React, { useState } from 'react';
import { Card, Row, Col, Rate } from 'antd';
import { HomeFilled, LayoutFilled, BorderOuterOutlined, HeartFilled, PlusSquareFilled } from '@ant-design/icons';
import Slider from '../../Components/Slider/Slider';
import classNames from 'classnames';
import './PosterCard.css';
const { Meta } = Card;

function PosterCard() {
	let slides = [
		{
			background: 'https://www.w3schools.com/w3images/coffee.jpg',
			text: 'Coffee'
		},
		{
			background: 'https://www.w3schools.com/w3images/workbench.jpg',
			text: 'Workbench'
		},
		{
			background: 'https://www.w3schools.com/w3images/sound.jpg',
			text: 'Sound'
		}
	];

	const desc = [ 'Rất tệ', 'Tệ', 'Trung bình', 'Tốt', 'Rất tốt' ];

	const [ isLike, setIsLike ] = useState(false);
	const [ isFollow, setFollow ] = useState(false);

	return (
		<Card style={{ width: 300 }} cover={<Slider slides={slides} />}>
			<div className="card-meta">
				<div className="card-title">
					<span>3 +1 bedroom luxurious apartment in Juman One</span>
				</div>
				<div className="card-description">
					<span>Số 8, ngõ 95, Yên Sở, Hoài Đức, Hà Nội</span>
				</div>
			</div>
			<Row>
				<div class="item-media-price">
					<span class="item-price">
						10.000.000<sup>đ</sup>
						<sub>/tháng</sub>
					</span>
				</div>
			</Row>
			<Row className="card-body">
				<Col span={12}>
					<span>
						<HomeFilled /> villa
					</span>
				</Col>
				<Col span={12}>
					<span>
						<BorderOuterOutlined /> 120 m<sup>2</sup>
					</span>
				</Col>
				<Col span={12}>
					<span>
						<LayoutFilled /> 3+1 phòng
					</span>
				</Col>
			</Row>
			<Row className="card-action">
				<div>
					<Rate tooltips={desc} allowHalf defaultValue={4} disabled />
				</div>
				<div>
					<div className="card-action-icon">
						<HeartFilled className={classNames({ liked: isLike })} />
					</div>
					<div className="card-action-icon">
						<PlusSquareFilled className={classNames({ isFollowed: isFollow })} />
					</div>
				</div>
			</Row>
		</Card>
	);
}

export default PosterCard;
