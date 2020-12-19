import React from 'react';
import './Input.css';

function Input({ message, setMessage, sendMessage }) {
	return (
		<div className="position-fixed-bottom-right">
			<input
				className="input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
				onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
			/>
			<button className="sendButton" onClick={(e) => console.log(e)}>
				Send
			</button>
		</div>
	);
}

export default Input;
