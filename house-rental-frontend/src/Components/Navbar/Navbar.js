import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeartIcon from '../../Asset/Icon/heart_white.svg';
import { useDispatch, useSelector } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'
import { useHistory } from 'react-router-dom'
import Logo from '../../Asset/Icon/logo.svg';

function Navbar() {
	const dispatch = useDispatch()

	const auth = useSelector(state => state.auth)

	const openLoginPopupHander = () => {
		return dispatch(openLoginPopup())
	}

	const [isUserPage, setIsUserPage] = useState(true)


	const history = useHistory()

	useEffect(() => {
		const pathName = window.location.pathname
		setIsUserPage(!(pathName === '/admin' || pathName === '/owner'))
	}, [])

	const ownerLogout = () => {
		sessionStorage.removeItem('ownerToken')
		history.go(0)
	}

	const adminLogout = () => {
		sessionStorage.removeItem('adminToken')
		history.go(0)
	}

	const userLogout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		history.go(0)
	}



	return (
		<nav className="navbar">
			<input type="checkbox" id="checkbox-burger" />
			<label htmlFor="checkbox-burger" className="burger">
				<MenuOutlined />
			</label>
			<label className="logo">
				<img src={Logo} alt="logo"/>
			</label>
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
					{!auth.loggedIn
						&& isUserPage
						&& !localStorage.getItem('token')
						&& <span className="nav-login-button" onClick={openLoginPopupHander}>Đăng nhập</span>
					}
					{window.location.pathname === '/owner'
						&& sessionStorage.getItem('ownerToken')
						&& <span className="nav-login-button" onClick={ownerLogout}>Đăng xuất</span>
					}
					{window.location.pathname === '/admin'
						&& sessionStorage.getItem('adminToken')
						&& <span className="nav-login-button" onClick={adminLogout}>Đăng xuất</span>
					}
					{window.location.pathname !== '/admin'
						&& window.location.pathname !== '/owner'
						&& (localStorage.getItem('token') || auth.loggedIn)
						&& <span className="nav-login-button" onClick={userLogout}>Đăng xuất</span>
					}
				</ul>
			</Router>
		</nav>
	);
}

export default Navbar;
