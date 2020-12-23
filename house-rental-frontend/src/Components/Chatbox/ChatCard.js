import React from 'react';
import Avatar from 'react-avatar';

function ChatCard(props) {
	const { info } = props;
	const { ownerName, lastMessage, isReadLastMessage, lastestSenderName } = info;
	let name = ownerName;
	return (
		<div className="chatCard">
			<Avatar name={name} size="40" round={true} />{' '}
			<div className="d-inline">
				<h6 className="d-inline">{name}</h6>{' '}
				<div className="char-card-lastest">
					<span className="chat-card-sender-name">{lastestSenderName}: </span>
					<span className="chat-card-lastest-message">{lastMessage}</span>
				</div>
			</div>
		</div>
	);
}

export default ChatCard;
