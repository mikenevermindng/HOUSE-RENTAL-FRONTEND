import React from 'react';
import './App.css';
import RoomDetails from './pages/RoomDetails';
import Owner from './pages/Owner';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import Rooms from './pages/Rooms';
import Chat from './pages/Chating'
import UserLoginPopup from './Components/LoginModal/index'
import UserLoginForm from './Components/LoginModal/UserForm/login'
import UserRegisterForm from './Components/LoginModal/UserForm/register'
import { useSelector } from 'react-redux'


function App() {

	const isShowLoginPopup = useSelector(state => state.isShowLoginPopup)
	return (
		<div className="App">
			<Switch>
				<Route exact path='/owner/' component={Owner} />
				<Route exact path='/admin/' component={Admin} />
				<Route exact path='/rooms/' component={Rooms} />
				<Route exact path='/room-details/:accomodId' component={RoomDetails} />
				<Route exact path='/chat' component={Chat} />
			</Switch>
			{isShowLoginPopup && <UserLoginPopup>
				<UserLoginForm />
				<UserRegisterForm />
			</UserLoginPopup>}
		</div>
	);
}

export default App;
