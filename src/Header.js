import React from 'react';
import { Link } from 'react-router-dom';

import MangoLogo from './images/Mango.png';
import './header.css';

const Header = () => (
	<div className="header container-fluid">
   		<div className="container">
   			<div className="row">
   				<div className="col-sm-12 login">
					<Link to="/login">
			    		<div className='content'>
			    			Login
			    		</div>
			    	</Link>
			   	</div>
			</div>
	   		<div className="row logo">
	   			<div className="col-sm-3">
	   				<img className="img" alt='Mango Development Logo'  src={MangoLogo} />
	   			</div>
				<div className="col-sm-9 nav">
			  		<Link to="/product" className="">
			      		<div className='content'>
			        		What We Do
			      		</div>
			    	</Link>
			    	<Link to="/portfolio" className="">
			      		<div className='content'>
			        		What We Did
			      		</div>
			    	</Link>
			    	<Link to="/" className="">
			      		<div className="content">
			        		Who We Are
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