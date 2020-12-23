import React, { useState } from 'react'
import { apiPostReportPoster } from '../../Services/report_poster_service'
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'
import { Popover, Button, Rate, Input, message } from 'antd';

const TextArea = Input;

function UserReport(props) {

    const { posterId, ratingId } = props

    const dispatch = useDispatch()

    const [reason, setReason] = useState('')

    const reasonChangeHandler = event => {
        setReason(event.target.value)
    }

    const submitReportHandler = async () => {
        const data = { posterId, reason, ratingId }
        if (reason.length === 0) {
            return message.error('Bạn phải nhập lý do báo cáo bài viết')
        }
        const res = await apiPostReportPoster(data)
        if (res) {
            message.success("Báo cáo bài viết thành công")
        } else {
            message.error("Phiên làm việc của bạn đã hết hạn")
            dispatch(openLoginPopup())
        }
    }

    return (
        <div>
            <Popover
                content={
                    <div className="user-rating-container">
                        <div className="comment-container">
                            <h3>Lý do bạn muốn báo cáo bài viết này?</h3>
                            <TextArea row={4} onChange={(event) => reasonChangeHandler(event)} />
                        </div>
                        <Button onClick={submitReportHandler}>Hoàn thành</Button>
                    </div>
                }
                title="Đánh giá của bạn về chỗ ở này"
                trigger="click"
                placement="right"
                style={{ height: '100px !important' }}
            >
                <Button>Báo cáo bài viết</Button>
            </Popover>
        </div>
    )
}

export default UserReport
