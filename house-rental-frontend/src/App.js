import React from 'react';
import './App.css';
import RoomDetails from './pages/RoomDetails';
import Owner from './pages/Owner';
import Admin from './pages/Admin';
import Rooms from './pages/Rooms';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path='/owner/' component={Owner} />
				<Route exact path='/admin/' component={Admin} />
				<Route exact path='/rooms/' component={Rooms} />
				<Route exact path='/room-details/:accomodId' component={RoomDetails} />
			</Switch>
		</div>
	);
}

export default App;
