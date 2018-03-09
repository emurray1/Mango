import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './homepage.css';

const HomePage = () => {
		return (
    		<div className='homepage container-fluid'>
    			<div className="row">
    				<div className="col-sm-4">
                        <div className="box">
    					   <span className="fab fa-react fa-10x"></span>
                        </div>
    				</div>
    				<div className="col-sm-4">
                        <div className="box">
    					   <span className="fab fa-node fa-10x"></span>
                        </div>
    				</div>
    				<div className="col-sm-4">
                        <div className="box">
    					   <span className="fab fa-aws fa-10x"></span>
                        </div>
    				</div>
    			</div>
                <div className="row intro">
                    <div className="container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mattis lectus sed finibus. Ut non varius mauris. Curabitur vulputate sit amet mi egestas sollicitudin. Sed mattis augue quis malesuada vehicula. Aliquam eget orci velit. Duis varius commodo odio. Nullam id iaculis justo. Donec aliquam cursus leo, non volutpat nisl finibus eget. Proin vel orci sit amet massa posuere sodales. Quisque luctus diam eget sollicitudin hendrerit. Pellentesque augue nibh, congue eu neque eu, maximus consequat tellus. Sed auctor quam et ante blandit, sed condimentum eros pellentesque. Nam et porttitor ligula, non porttitor urna. Integer ut tristique dolor, sagittis sollicitudin purus. In hac habitasse platea dictumst.</p>
                    </div>
                </div>
    		</div>
    	)
  }

export default HomePage;