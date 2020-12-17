import React from 'react';
import { Popover, Button, Rate, Input } from 'antd';

const TextArea = Input;

function UserRating() {
    return (
        <div className="user-rating">
            <Popover
                content={
                <div className="user-rating-container">
                    <div className="stars-container">
                        <h3>Từ 1 đến 5 sao?</h3>
                        <Rate allowHalf/>
                    </div>
                    <div className="comment-container">
                        <h3>Mô tả trải nghiệm của bạn (không bắt buộc)</h3>
                        <TextArea row={4}/>
                    </div>
                    <Button>Hoàn thành</Button>
                </div>
            }
                title="Đánh giá của bạn về chỗ ở này"
                trigger="click"
                placement="right"
                style={{height: '100px !important'}}
            >
                <Button>Click</Button>
            </Popover>
        </div>
    )
}

export default UserRating;