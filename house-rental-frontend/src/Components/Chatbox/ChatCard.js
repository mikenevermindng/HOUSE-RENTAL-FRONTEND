import React from 'react';
import Avatar from 'react-avatar';

function ChatCard(props) {
	const { info } = props;
	const { ownerName } = info;
	let name = ownerName;
	return (
		<div className="chatCard">
			<Avatar name={name} size="40" round={true} />{' '}
			<div className="d-inline">
				<h6 className="d-inline">{name}</h6>{' '}
			</div>
		</div>
	);
}

export default ChatCard;
