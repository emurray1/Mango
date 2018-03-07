import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './homepage.css';

const HomePage = () => {
		return (
    		<div className='homepage container'>
    			<div className="row">
    				<div className="col-sm-4 col left">
                        <h1>FULL</h1>
    					<span className="fab fa-react fa-10x"></span>
    				</div>
    				<div className="col-sm-4 col center">
                        <h1>STACK</h1>
    					<span className="fab fa-node fa-10x"></span>
    				</div>
    				<div className="col-sm-4 col right">
                        <h1>DEVELOPMENT</h1>
    					<span className="fab fa-aws fa-10x"></span>
    				</div>
    			</div>
    		</div>
    	)
  }

export default HomePage;