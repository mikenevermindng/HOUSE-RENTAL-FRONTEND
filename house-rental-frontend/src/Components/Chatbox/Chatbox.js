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

	// useEffect(
	// 	() => {
	// 		socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

	// 		axios
	// 			.get('http://localhost:3002/' + userId)
	// 			.then((result) => {
	// 				setChatboxList(result.data.chatboxes);
	// 				setChatboxId(result.data.chatboxes[0]._id);
	// 			})
	// 			.catch((error) => console.log(error));

	// 		return () => {
	// 			socket.emit('disconnect');
	// 			socket.off();
	// 		};
	// 	},
	// 	[ENDPOINT]
	// );

	console.log(chatboxList)

	// useEffect(() => {
	// 	socket.on('message', (messageSent) => {
	// 		setMessagesList((messages) => [...messages, messageSent]);
	// 	});
	// }, []);

	console.log(messagesList)

	useEffect(
		() => {
			// if (chatboxId !== '') {
			// 	console.log('calling');
			// 	socket.emit('join', { name, chatboxId }, () => { });
			// 	axios
			// 		.get('http://localhost:3002/getChatbox/' + chatboxId)
			// 		.then((result) => {
			// 			setMessagesList(result.data.messages);
			// 		})
			// 		.catch((error) => console.log(error));
			// }

			const chatcards = [
				{
					"_id": "5fc74284e5666c4754f0b05d",
					"members": [
						{
							"_id": "5fc60d1ffc13ae7947000000",
							"name": "Nam"
						},
						{
							"_id": "5fc60d1ffc13ae7947000001",
							"name": "Manh"
						}
					]
				},
				{
					"_id": "5fc74297e5666c4754f0b060",
					"members": [
						{
							"_id": "5fc60d1ffc13ae7947000000",
							"name": "Nam"
						},
						{
							"_id": "5fc60d1ffc13ae7947000002",
							"name": "Manh"
						}
					]
				}
			]

			setChatboxList(chatcards)

			const message = [
				{
					"_id": "5fca1b26060b33363cc82800",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfha"
				},
				{
					"_id": "5fca1b29060b33363cc82801",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfhafdalhfdl"
				},
				{
					"_id": "5fca1b2a060b33363cc82802",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfhafdalhfdldfkahsdf"
				},
				{
					"_id": "5fca1b2c060b33363cc82803",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfhafdalhfdldfkahsdf"
				},
				{
					"_id": "5fca1b2c060b33363cc82804",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfhafdalhfdldfkahsdf"
				},
				{
					"_id": "5fca1b2c060b33363cc82805",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "jhkhdkfhafdalhfdldfkahsdf"
				},
				{
					"_id": "5fca1b6b060b33363cc82806",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Manh",
					"content": "đây là Minh"
				},
				{
					"_id": "5fca1f2d060b33363cc82807",
					"senderId": "5fc60d1ffc13ae7947000001",
					"senderName": "Nam",
					"content": "Nhung ơi"
				},
				{
					"_id": "5fca1f35060b33363cc82808",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Manh",
					"content": "ơi"
				},
				{
					"_id": "5fd1d031cfd76c251cf1cca8",
					"senderId": "5fc60d1ffc13ae7947000001",
					"senderName": "Nam",
					"content": "Đại ơi"
				},
				{
					"_id": "5fd8726a0185eb089c1ef3dd",
					"senderId": "5fc60d1ffc13ae7947000001",
					"senderName": "Nam",
					"content": "Name"
				},
				{
					"_id": "5fd8727f0185eb089c1ef3de",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Minh làm cái này là ổn"
				},
				{
					"_id": "5fd8733e0185eb089c1ef3df",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Minh làm cái này là ổn"
				},
				{
					"_id": "5fd8733e0185eb089c1ef3e0",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Minh làm cái này là ổn"
				},
				{
					"_id": "5fd8733e0185eb089c1ef3e1",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Minh làm cái này là ổn"
				},
				{
					"_id": "5fd8733f0185eb089c1ef3e2",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Minh làm cái này là ổn"
				},
				{
					"_id": "5fdd71cf71cc1a5288432ef4",
					"senderId": "5fc60d1ffc13ae7947000000",
					"senderName": "Micheal",
					"content": "Cái gì đây"
				}
			]
			setMessagesList(message)
		},
		[chatboxId]
	);

	// const sendMessage = (event) => {
	// 	event.preventDefault();
	// 	if (message) {
	// 		socket.emit(
	// 			'sendMessage',
	// 			{ content: message, senderId: userId, chatboxId: chatboxId, senderName: name },
	// 			() => setMessage('')
	// 		);
	// 	}
	// };

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
						// sendMessage={sendMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chatbox;
