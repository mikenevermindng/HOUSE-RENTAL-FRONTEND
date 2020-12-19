import React from 'react';


import Message from './Message';

import './messages.css';

const Messages = ({ messages, userId }) => {
	return (
		<div className="messages">
			{messages.map((message, i) => (
				<div key={i}>
					<Message message={message} userId={userId} />
				</div>
			))}
		</div>
	);
};

export default Messages;
