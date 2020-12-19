import React, { useState, useEffect } from 'react';
import ChatboxHeader from './ChatboxHeader';
import ChatCard from './ChatCard';
import Messages from './Massages/Messages';
import './Chatbox.css';
import Input from './Input/Input';
import queryString from 'query-string';
import axios from 'axios';

import io from 'socket.io-client';

let socket;

function Chatbox({ location }) {
	const [message, setMessage] = useState('');
	const [messagesList, setMessagesList] = useState([]);
	const [name, setName] = useState('Micheal');
	const [userId, setUserId] = useState('5fc60d1ffc13ae7947000000');
	const [chatboxList, setChatboxList] = useState([]);
	const [chatboxId, setChatboxId] = useState('');

	const ENDPOINT = 'localhost:3002';

	useEffect(
		() => {
			socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

			axios
				.get('http://localhost:3002/' + userId)
				.then((result) => {
					setChatboxList(result.data.chatboxes);
					setChatboxId(result.data.chatboxes[0]._id);
				})
				.catch((error) => console.log(error));

			return () => {
				socket.emit('disconnect');
				socket.off();
			};
		},
		[ENDPOINT]
	);

	useEffect(() => {
		socket.on('message', (messageSent) => {
			setMessagesList((messages) => [...messages, messageSent]);
		});
	}, []);

	useEffect(
		() => {
			if (chatboxId !== '') {
				console.log('calling');
				socket.emit('join', { name, chatboxId }, () => { });
				axios
					.get('http://localhost:3002/getChatbox/' + chatboxId)
					.then((result) => {
						setMessagesList(result.data.messages);
					})
					.catch((error) => console.log(error));
			}
		},
		[chatboxId]
	);

	const sendMessage = (event) => {
		event.preventDefault();
		if (message) {
			socket.emit(
				'sendMessage',
				{ content: message, senderId: userId, chatboxId: chatboxId, senderName: name },
				() => setMessage('')
			);
		}
	};

	return (
		<div className="">
			<div className="chatScreen">
				<div className="listChatbox row">
					<div className="chatBoxCardList col-md-3">
						<ChatboxHeader name="Micheal" />
						<div className="search-feild">
							<input type="text" placeholder="search" />
						</div>
						<div className="list">
							{chatboxList.map((item, index) => (
								<div onClick={() => setChatboxId(item._id)} key={"chat_card_" + index}>
									<ChatCard info={item} userId={userId} key={index} />
								</div>
							))}
						</div>
					</div>
					<div className="chatBox d-inline col-md-9">
						<Messages messages={messagesList} userId={userId} />
						<Input
							message={message}
							messages={messagesList}
							setMessage={setMessage}
							sendMessage={sendMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chatbox;
