import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeartIcon from '../../Asset/Icon/heart_white.svg';
import { useDispatch, useSelector } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'

function Navbar() {
	const dispatch = useDispatch()
	const openLoginPopupHander = () => {
		return dispatch(openLoginPopup())
	}

	const auth = useSelector(state => state.auth)

	const [isLoggin, setIsLoggIn] = useState(false)

	useEffect(() => {
		const isLogged = localStorage.getItem('token') ? true : false
		setIsLoggIn(isLogged)
	}, [])

	return (
		<nav className="navbar">
			<input type="checkbox" id="checkbox-burger" />
			<label htmlFor="checkbox-burger" className="burger">
				<MenuOutlined />
			</label>
			<label className="logo">Logo</label>
			<Router>
				<ul>
					<li className="nav-link">
						<Link>Tìm thuê</Link>
					</li>
					<li className="nav-link">
						<Link>
							<div className="favorite-link">
								<span>Yêu thích</span>
								<img src={HeartIcon} alt="heart" id="heart" />
							</div>
						</Link>
					</li>
					{!auth.loggedIn && !localStorage.getItem('token') && <span className="nav-login-button" onClick={openLoginPopupHander}>Đăng nhập</span>}
				</ul>
			</Router>
		</nav>
	);
}

export default Navbar;
