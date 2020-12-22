import React from 'react';


import Message from './Message';

import './messages.css';

const Messages = ({ messages, userId, name }) => {
	return (
		<div className="messages">
			{messages.map((message, i) => (
				<div key={i}>
					<Message message={message} userId={userId} name={name} />
				</div>
			))}
		</div>
	);
};

export default Messages;
