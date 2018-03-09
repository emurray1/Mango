import React from 'react';
import { Link } from 'react-router-dom';

import MangoLogo from '../images/Mango.png';
import './header.css';

const Header = () => (
		constructor(props) {
			super(prop);
			this.state = {hover:false};
		}
   		<div className="header container-fluid">
	   			<div className="container">
	   				<div className="row logo">
	   					<div className="col-sm-5">
			   				<hr className="break"/>
			   			</div>
			   			<div className="col-sm-2 logo">
			   				<img className="img" alt='Mango Development Logo'  src={MangoLogo} />
			   			</div>
			   			<div className="col-sm-5">
			   				<hr className="break"/>
			   			</div>
			   		</div>
			   		<div className="row header-nav">
				   		<div className="nav">
					  			<Link to="/" className="">
					      			<div className="content">
					        			Home
					      			</div>
					    		</Link>
					  			<Link to="/portfolio" className="">
					      			<div className='content'>
					        			Portfolio
					      			</div>
					    		</Link>
					    		<Link to="/contact" className="">
					      			<div className='content'>
					        			Contact
					      			</div>
					    		</Link>
		  				</div>
		  			</div>
	   			</div>
	   		</div>
	
   	)
 
export default Header;