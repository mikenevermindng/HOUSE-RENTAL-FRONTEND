import React from 'react';
import Avatar from 'react-avatar';

function ChatCard(props) {
	const { info, userId } = props;
	const { members } = info;
	let name = '';
	if (userId === members[0]._id) {
		name = members[1].name;
	} else {
		name = members[0].name;
	}
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
