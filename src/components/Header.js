import React from 'react';

import MangoLogo from '../images/Mango.svg'

const Header = () => {
		return (
    		<div className='header jumbotron'>
    			<div className="row">
    				<img className="img" alt='Mango Development Logo'  src={MangoLogo} />
    			</div>
    		</div>
    	)
  	}
 
export default Header;