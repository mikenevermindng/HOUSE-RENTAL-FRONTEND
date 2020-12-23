import React, { useState, useEffect } from 'react';
import { Comment, List, Rate, Button, message, Popconfirm } from 'antd';
import {
    apiGetCommentByRatingId,
    apiApprovedComment,
    apiDeleteComment
} from '../../Services/comment_services'
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'

function RatingDrawer(props) {
    const { posterId, ratingId } = props;

    const [commentList, setCommentList] = useState([])


    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await apiGetCommentByRatingId(ratingId)
            console.log(res)
            setCommentList(res.comments)
        }
        fetchDataAsync()
    }, [posterId])

    const deleteCommentHandler = async (commentId) => {
        const res = await apiDeleteComment(commentId)
        if (res) {
            message.success("Chấp thuận bình luận thành công")
            const res = await apiGetCommentByRatingId(ratingId)
            setCommentList(res.comments)
        } else {
            dispatch(openLoginPopup())
            message.error("Phiên làm việc của bạn đã hết hạn, vui lòng đăng nhập lại")
        }
    }

    const approvedCommentHandler = async (commentId) => {
        const res = await apiApprovedComment(commentId)
        console.log('res', res)
        if (res) {
            message.success("Chấp thuận thành công")
            const res = await apiGetCommentByRatingId(ratingId)
            setCommentList(res.comments)
        } else {
            dispatch(openLoginPopup())
            message.error("Phiên làm việc của bạn đã hết hạn, vui lòng đăng nhập lại")
        }
    }

    return (
        <div className="info-box">
            <List
                className="ratings-list"
                itemLayout="horizontal"
                dataSource={commentList}
                renderItem={item => (
                    <li className="ratings-item">
                        <Rate allowHalf disabled defaultValue={item.stars} />
                        <Comment
                            author={item.username}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.comment}
                        />
                        <Popconfirm
                            title="Xóa bình luận"
                            onConfirm={() => deleteCommentHandler(item._id)}
                        >
                            <Button type="outline" danger >Xóa</Button>
                        </Popconfirm>

                        {!item.isApproved && <Popconfirm
                            title="Chấp thuận bình luận"
                            onConfirm={() => approvedCommentHandler(item._id)}
                        >
                            <Button type="outline">Chấp thuận</Button>
                        </Popconfirm>}
                    </li>
                )}
            />
        </div>
    )
}

export default RatingDrawer;