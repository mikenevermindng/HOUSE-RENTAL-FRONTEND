import React from 'react';
import './Input.css';

function Input({ message, setMessage, sendMessage }) {
	return (
		<div className="position-fixed-bottom-right">
			<input
				className="input"
				type="text"
				placeholder="Nhập tin nhắn của bạn ở đây..."
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
				onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
			/>
			<button className="sendButton" onClick={(event) => sendMessage(event)}>
				Gửi
			</button>
		</div>
	);
}

export default Input;
