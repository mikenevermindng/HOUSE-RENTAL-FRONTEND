import React from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar">
			<input type="checkbox" id="checkbox-burger" />
			<label for="checkbox-burger" className="burger">
				<MenuOutlined />
			</label>
			<label className="logo">Logo</label>
			<Router>
				<ul>
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>Discover</Link>
					</li>
					<li>
						<Link>Rent</Link>
					</li>
					<li>
						<Link>Contact</Link>
					</li>
					<span className="nav-login-button">Đăng nhập</span>
				</ul>
			</Router>
		</nav>
	);
}

export default Navbar;
