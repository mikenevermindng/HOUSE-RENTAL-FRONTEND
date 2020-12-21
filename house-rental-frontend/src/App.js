import React from 'react';
import './App.css';
import RoomDetails from './pages/RoomDetails';
import Owner from './pages/Owner';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import Chat from './pages/Chating'
import UserLogin from './Components/LoginPage/index'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path='/owner/' component={Owner} />
				<Route exact path='/admin/' component={Admin} />
				<Route exact path='/rooms/' component={Rooms} />
				<Route exact path='/room-details/:accomodId' component={RoomDetails} />
				<Route exact path='/chat' component={Chat} />
			</Switch>
			<UserLogin />
		</div>
	);
}

export default App;
