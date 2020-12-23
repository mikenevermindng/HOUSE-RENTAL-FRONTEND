import React from 'react';
import {notification} from 'antd';
import NotiIcon from '../../Asset/Icon/alarm.svg';
import './NotificationBubble.css';

function NotificationBubble() {

    const fakeData = [
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhhsjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            senderName: "admin",
            content: "sjdasjdjashdkhasjdahhhhhhhhhhhhhhhhhhhhhhhhh"
        },
    ]

    const notiCard = (senderName, content) => {
        return (
            <div className="notification">
                <p id="sender-name">{senderName}</p>
                <p id="noti-content">{content}</p>
            </div>
        )
    }

    const returnNotis = (fakeData) => {
        return (
            <div className="noti-card">
                {fakeData.map(data => {
                    return notiCard(data.senderName, data.content)
                })}
            </div>
        )
    }

    const openNotification = () => {
        let args = {
            message: 'Thông báo',
            description: returnNotis(fakeData),
            duration: 0,
        };

        notification.open(args);
    };

    return (
        <div className="fixed-bubble" id="noti-bubble" onClick={openNotification}>
            <img src={NotiIcon} alt="noti-icon"/>
        </div>
    )
}

export default NotificationBubble;