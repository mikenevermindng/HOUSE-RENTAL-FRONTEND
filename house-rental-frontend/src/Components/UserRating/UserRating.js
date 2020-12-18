import React, { useState } from 'react';
import { Popover, Button, Rate, Input, message } from 'antd';
import { apiUserRatingAction } from '../../Services/rating_service'

const TextArea = Input;

function UserRating(props) {

    const { ratingId, userId, username } = props

    const [star, setStar] = useState(0)
    const [comment, setComment] = useState('')

    const rateChangeHandler = value => {
        setStar(value)
    }

    const commentChangeHandler = event => {
        setComment(event.target.value)
    }

    const submitRatingHandler = async () => {
        try {
            const rateData = {
                userId: userId,
                stars: star,
                comment: comment,
                username: username
            }
            if (star === 0) return message.error("Bạn chưa đánh giá Bất động sản")
            const res = await apiUserRatingAction(ratingId, rateData)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="user-rating">
            <Popover
                content={
                    <div className="user-rating-container">
                        <div className="stars-container">
                            <h3>Từ 1 đến 5 sao?</h3>
                            <Rate allowHalf value={star} onChange={(value) => rateChangeHandler(value)} />
                        </div>
                        <div className="comment-container">
                            <h3>Mô tả trải nghiệm của bạn (không bắt buộc)</h3>
                            <TextArea row={4} onChange={(event) => commentChangeHandler(event)} />
                        </div>
                        <Button onClick={submitRatingHandler}>Hoàn thành</Button>
                    </div>
                }
                title="Đánh giá của bạn về chỗ ở này"
                trigger="click"
                placement="right"
                style={{ height: '100px !important' }}
            >
                <Button>Click</Button>
            </Popover>
        </div>
    )
}

export default UserRating;