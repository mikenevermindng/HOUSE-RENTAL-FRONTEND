import React from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeartIcon from '../../Asset/Icon/heart_white.svg';

function Navbar() {
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
					<span className="nav-login-button">Đăng nhập</span>
				</ul>
			</Router>
		</nav>
	);
}

export default Navbar;
