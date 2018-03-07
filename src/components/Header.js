import React from 'react';

import MangoLogo from '../images/Mango.png';
import './header.css';

const Header = () => {
	return (
   		<div className="header jumbotron">
   			<div className="container">
   				<div className="row">
   					<div className="col-sm-4">
		   				<hr className="break"/>
		   			</div>
		   			<div className="col-sm-4 logo">
		   				<img className="img" alt='Mango Development Logo'  src={MangoLogo} />
		   			</div>
		   			<div className="col-sm-4">
		   				<hr className="break"/>
		   			</div>
		   		</div>
   			</div>
   		</div>
   	)
}
 
export default Header;