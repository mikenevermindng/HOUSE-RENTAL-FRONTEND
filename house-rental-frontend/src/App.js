import React, { useEffect } from 'react';
import './App.css';
import PosterCreator from './Components/PosterCreator/PosterCreator';
import Navbar from './Components/Navbar/Navbar';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import Slider from './Components/Slider/Slider';
import PosterCard from "./Components/PosterCard/PosterCard";
import RoomDetails from './pages/RoomDetails';
import Owner from './pages/Owner';
import {Route, Switch} from 'react-router-dom';

function App() {
	let slides = [
		{
			background: 'https://www.w3schools.com/w3images/coffee.jpg',
			text: 'Coffee'
		},
		{
			background: 'https://www.w3schools.com/w3images/workbench.jpg',
			text: 'Workbench'
		},
		{
			background: 'https://www.w3schools.com/w3images/sound.jpg',
			text: 'Sound'
		}
	];
	return (
		<div className="App">
			<Switch>
				<Route exact path='/room-details/' component={RoomDetails} />
				<Route exact path='/owner/' component={Owner} />
			</Switch>
		</div>
	);
}

export default App;
