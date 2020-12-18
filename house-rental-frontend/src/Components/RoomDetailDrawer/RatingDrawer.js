import React from 'react';
import {Comment, List, Rate} from 'antd';

function RatingDrawer(props) {
    const rating = props.data.props;

    return (
        <div className="info-box">
            <List
                className="ratings-list"
                itemLayout="horizontal"
                dataSource={rating.rating.ratedTime}
                renderItem={item => (
                    <li className="ratings-item">
                        <Rate allowHalf disabled defaultValue={item.stars}/>
                        <Comment
                            author={item._id}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.comment}
                        />
                    </li>
                )}
            />
        </div>
    )
}

export default RatingDrawer;