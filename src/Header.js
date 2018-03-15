import React from 'react';
import { Link } from 'react-router-dom';

import MangoLogo from './images/Mango_Header.png';
import './header.css';

const Header = () => (
	<div className="header container-fluid bg-primary">
   		<div className="container">
   			<div className="row">
   				<div className="col-12 login">
					<Link to="/login">
			    		<div className='text-secondary'>
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
			      		<div className='text-secondary'>
			        		What We Do
			      		</div>
			    	</Link>
			    	<Link to="/portfolio" className="">
			      		<div className='text-secondary'>
			        		What We Did
			      		</div>
			    	</Link>
			    	<Link to="/" className="">
			      		<div className="text-secondary">
			        		Who We Are
			      		</div>
			    	</Link>
			    	<Link to="/contact" className="">
			      		<div className='text-secondary'>
			        		Contact
			      		</div>
			    	</Link>
		  		</div>
		  	</div>
	    </div>
	</div>
)
 
export default Header;