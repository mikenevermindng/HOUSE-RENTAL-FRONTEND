import React from 'react';
import { notification } from 'antd';
import NotiIcon from '../../Asset/Icon/alarm.svg';
import './NotificationBubble.css';
import { adminGetNotification, ownerGetNotification } from '../../Services/notification_services'

function NotificationBubble(props) {

    const { type } = props

    const notiCard = (senderName, content, index) => {
        return (
            <div className="notification" key={'notiCard-' + index}>
                <p id="sender-name">{senderName}</p>
                <p id="noti-content">{content}</p>
            </div>
        )
    }

    const returnNotis = (fakeData) => {
        return (
            <div className="noti-card">
                {fakeData.map((data, index) => {
                    return notiCard(data.senderName, data.content, index)
                })}
            </div>
        )
    }

    const fetchData = async () => {
        let result = []
        if (type === 'admin') {
            const response = await adminGetNotification()
            result = [...response.data]
        } else {
            const response = await ownerGetNotification()
            result = [...response.data]
        }
        return result
    }

    const openNotification = async () => {
        const listNotification = await fetchData()
        let args = {
            message: 'Thông báo',
            description: returnNotis(listNotification),
            duration: 0,
        };

        notification.open(args);
    };

    return (
        <div className="fixed-bubble" id="noti-bubble" onClick={openNotification}>
            <img src={NotiIcon} alt="noti-icon" />
        </div>
    )
}

export default NotificationBubble;