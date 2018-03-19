import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import MangoLogo from './images/Mango_Header.png';
import './header.css';

const Header = () => (
   	<nav className="navbar bg-primary navbar-expand-lg sticky-top container-fluid">
   		<button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>	
   		<Link to="/">
		    <img className="img" alt='Mango Development Logo'  src={MangoLogo} />
		</Link>
		<div className="collapse navbar-collapse">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<NavLink exact className="nav-link text-secondary" to="/product">What We Do</NavLink>
				</li>
				<li className="nav-item">
					<NavLink exact className="nav-link text-secondary" to="/portfolio">What We Did</NavLink>
				</li>
				<li className="nav-item">
				 	<NavLink exact className="nav-link text-secondary" to="/contact">Contact</NavLink>
				</li>
		   	</ul>
	  	</div>
	</nav>

)
 
export default Header;