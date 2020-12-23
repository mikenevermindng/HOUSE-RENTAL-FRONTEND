import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeartIcon from '../../Asset/Icon/heart_white.svg';
import { useDispatch, useSelector } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'
import { useHistory } from 'react-router-dom'

function Navbar() {
	const dispatch = useDispatch()
	const openLoginPopupHander = () => {
		return dispatch(openLoginPopup())
	}

	const auth = useSelector(state => state.auth)

	const [isUserPage, setIsUserPage] = useState(true)


	const history = useHistory()

	useEffect(() => {
		const pathName = window.location.pathname
		setIsUserPage(!(pathName === '/admin' || pathName === '/owner'))
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
					<li className="nav-link" onClick={() => history.push('/')}>
						<Link>Tìm thuê</Link>
					</li>
					<li className="nav-link" onClick={() => history.push('/favorites')} >
						<Link>
							<div className="favorite-link">
								<span>Yêu thích</span>
								<img src={HeartIcon} alt="heart" id="heart" />
							</div>
						</Link>
					</li>
					{!auth.loggedIn && isUserPage && !localStorage.getItem('token') && <span className="nav-login-button" onClick={openLoginPopupHander}>Đăng nhập</span>}
				</ul>
			</Router>
		</nav>
	);
}

export default Navbar;
