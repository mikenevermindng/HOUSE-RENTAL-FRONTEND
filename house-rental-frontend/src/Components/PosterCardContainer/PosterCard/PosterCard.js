import React, {useState} from 'react';
import {Card, Rate, Tooltip} from 'antd';
import {BorderOuterOutlined, HeartFilled, HomeFilled, LayoutFilled} from '@ant-design/icons';
import Slider from '../../Slider/Slider';
import classNames from 'classnames';
import './PosterCard.css';

function PosterCard(props) {
    console.log(props);

    let slides = [
        {
            background: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
            text: 'Coffee'
        },
        {
            background: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            text: 'Workbench'
        },
        {
            background: 'https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            text: 'Sound'
        }
    ];

    const [isLike, setIsLike] = useState(false);

    const ratingCalculate = (rates) => {
        let sum = 0;

        rates.forEach((rate) => {
            sum += rate.stars;
        })

        return sum / rates.length;
    }

    return (
        <Card cover={<Slider slides={slides}/>} className="card-wrapper">
            <div className="card-content-wrapper">
                <div className="card-meta">
                    <div className="card-title">
                        <Tooltip placement="topLeft" title={props.data.title}>
                            <span>{props.data.title}</span>
                        </Tooltip>
                    </div>
                    <div className="card-description">
                        <Tooltip placement="topLeft" title={props.data.address}>
                            <span>{props.data.address}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className="item-media-price">
					<span className="item-price">
						{props.data.pricePerMonth}<sup>đ</sup>
						<sub>/tháng</sub>
					</span>
                </div>

                <div className="card-icon-container">
                    <Tooltip placement="topLeft" title={"Kiểu nhà: " + props.data.typeOfAccommodation}>
                        <div className="card-icon">
							<span>
						        <HomeFilled/>
					        </span>
                        </div>
                    </Tooltip>

                    <Tooltip placement="topLeft" title={"Diện tích: " + props.data.area + 'm2'}>
                        <div className="card-icon">
							<span>
						        <BorderOuterOutlined/>
					        </span>
                        </div>
                    </Tooltip>

                    <Tooltip placement="topLeft" title={"Số phòng: " + props.data.numberOfRoom}>
                        <div className="card-icon">
							<span>
						        <LayoutFilled/>
					        </span>
                        </div>
                    </Tooltip>
                </div>

                <div className="card-action">
                    <div>
                        <Rate allowHalf defaultValue={ratingCalculate(props.data.rating.ratedTime)} disabled/>
                    </div>
                    <div>
                        <div className="card-action-icon">
                            <HeartFilled className={classNames({liked: isLike})}/>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default PosterCard;
