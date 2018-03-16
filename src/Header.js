import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import MangoLogo from './images/Mango_Header.png';
import './header.css';

const Header = () => (
	<div className="header container-fluid bg-primary">
   		<div className="container">
   			<nav className="navbar navbar-expand-lg">
   				<Link to="/">
				    <img className="img" alt='Mango Development Logo'  src={MangoLogo} />
			    </Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>		
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
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
	    </div>
	</div>
)
 
export default Header;