import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
	return (
  		<div className="header-nav">
  			<div className="row">
	  			<Link to="/" className="">
	      			<div className="content">
	        			<span className="fas fa-home fa-3x"></span>
	      			</div>
	    		</Link>
	  			<Link to="/portfolio" className="">
	      			<div className='content'>
	        			Portfolio
	      			</div>
	    		</Link>
    		</div>
  		</div>
  	)
}
 
export default Navigation;