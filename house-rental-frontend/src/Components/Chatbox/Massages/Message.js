import React from 'react';

import './message.css';

import ReactEmoji from 'react-emoji';
import Avatar from 'react-avatar';

function Message({ message, userId }) {
	const { content, senderId, senderName } = message;
	let isSentByCurrentUser = false;

	if (userId === senderId) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<div className="messageBox backgroundBlue">
				<span className="messageText colorWhite">{ReactEmoji.emojify(content)}</span>
			</div>
			<Avatar name={senderName} size="40" round={true} />
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<Avatar name={senderName} size="40" round={true} />
			<div className="messageBox backgroundLight">
				<span className="messageText colorDark">{ReactEmoji.emojify(content)}</span>
			</div>
		</div>
	);
}

export default Message;
