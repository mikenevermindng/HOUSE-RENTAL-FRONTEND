import React, { useState } from 'react';
import { Popover, Button, Rate, Input, message } from 'antd';
import { apiPostComment } from '../../Services/comment_services'

const TextArea = Input;

function UserRating(props) {


    const { ratingId, userId, username, posterId } = props

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
                username: username,
                ratingId: ratingId,
                postId: posterId

            }
            if (star === 0) return message.error("Bạn chưa đánh giá Bất động sản")
            const res = await apiPostComment(rateData)
            message.success("Đăng tải bình luận thành công, hãy chờ admin phê duyệt để được hiện thị")
        } catch (error) {
            console.log(error)
            message.success("Đăng tải bình luận thất bại")
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