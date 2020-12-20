import React from 'react';
import './App.css';
import RoomDetails from './pages/RoomDetails';
import Owner from './pages/Owner';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import SearchPanel from "./Components/SearchPanel/SearchPanel";

function App() {
	return (
		<div className="App" style={{overflow: 'hidden'}}>
			<Switch>
				<Route exact path='/owner/' component={Owner} />
				<Route exact path='/admin/' component={Admin} />
				<Route exact path='/room-details/:accomodId' component={RoomDetails} />
			</Switch>
			<SearchPanel />
		</div>
	);
}

export default App;
