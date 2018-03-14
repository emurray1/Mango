import React from 'react';
import { Link } from 'react-router-dom';

import MangoLogo from './images/Mango_Header.png';
import './header.css';

const Header = () => (
	<div className="header container-fluid">
   		<div className="container">
   			<div className="row">
   				<div className="col-12 login">
					<Link to="/login">
			    		<div className='content'>
			    			Login
			    		</div>
			    	</Link>
			   	</div>
			</div>
	   		<div className="row logo">
	   			<div className="col-6 col-md-2">
	   				<img className="img" alt='Mango Development Logo'  src={MangoLogo} />
	   			</div>
				<div className="col-6 col-md-10 nav align-self-center">
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