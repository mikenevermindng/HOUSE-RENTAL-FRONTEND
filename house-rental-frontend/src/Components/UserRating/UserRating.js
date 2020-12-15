import React from 'react';
import { Popover, Button, Rate } from 'antd';

function UserRating() {
    return (
        <div className="user-rating">
            <Popover content="user" title="Đánh giá của bạn về chỗ ở này" trigger="click">
                <Rate/>
            </Popover>
        </div>
    )
}

export default UserRating;