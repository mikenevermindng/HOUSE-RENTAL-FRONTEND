import React, { createElement, useState } from 'react';
import './Ratings.css';
import 'antd/dist/antd.css';
import { Comment, Tooltip, List, Rate } from 'antd';
import moment from 'moment';
import UserRating from "../UserRating/UserRating";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

function Ratings(props) {
    const ratings = props.ratings;

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    }

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    }

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <div>
            <h1>Đánh giá</h1>
            <UserRating />
            <List

                itemLayout="horizontal"
                dataSource={ratings}
                renderItem={item => (
                    <li>
                        <Rate allowHalf disabled defaultValue={item.rating}/>
                        <Comment
                            actions={actions}
                            author={item.name}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.content}
                        />
                    </li>
                )}
            />
        </div>
    )
}

export default Ratings;