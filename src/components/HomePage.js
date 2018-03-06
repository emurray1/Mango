import React, { Component } from 'react';
import { Header } from './Header';

class Homepage extends Component {
	render() {
		return (
			<Header />
    		<div className="container">
    			<p>Hello World</p>
    		</div>
    	);
  	}
}

export default Homepage;