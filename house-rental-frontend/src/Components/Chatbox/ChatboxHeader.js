import React from 'react';
import Avatar from 'react-avatar';

function ChatboxHeader(props) {
	const { name } = props;
	console.log(name);
	return (
		<div>
				<div className="listHeader">
					<Avatar name="name" size="40" round={true} />
					<div className="d-inline listHeaderTitle">
						<h4>Messenger</h4>
					</div>
					<div />
				</div>
				<div />
		</div>
	);
}

export default ChatboxHeader;
