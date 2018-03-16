import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rotate from './Rotate';
import CompanyProducts from './CompanyProducts'

import './homepage.css';
import HeroVideo from '../images/girls_code.mp4';

const HomePage = () => {
		return (
    		<div className='homepage container-fluid'>
                <div className="row mission-statement">
                    <div className="fullscreen-bg col-12">
                        <video className="fullscreen-bg_video" autoPlay loop >
                            <source src={HeroVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="inner col-12">
                        {/* <ul>
                            <li><h1>We design and develop web & mobile apps</h1></li>
                            <li><div className="col-12 col-md-6 left"><h1>to support </h1></div></li>
                            <li><div className="col-12 col-md-6 right"><h1><Rotate /></h1></div></li>
                            <li><div className="col-12 col-lg-12"><h1>on their missions.</h1></div></li>           
                            </ul>*/}
                        <row>
                            <h1>We design & developcss web & mobile apps</h1>
                        </row>
                        <row>
                            <div className="col-12 col-md-6 left">
                                <h1>to support </h1>
                            </div>
                            <div className="col-12 col-md-6 right">
                                <h1><Rotate /></h1>
                            </div>
                        </row>
                        <row>
                            <div className="col-12 col-lg-12">
                                <h1>on their missions.</h1>
                            </div>
                        </row>
                    </div>
                </div>
    			<div className="row company-offer">
                    <div className="inner col--12">
    		              <CompanyProducts />
                    </div>
                </div>
                <div className="row">
                    <div className="container text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mattis lectus sed finibus. Ut non varius mauris. Curabitur vulputate sit amet mi egestas sollicitudin. Sed mattis augue quis malesuada vehicula. Aliquam eget orci velit. Duis varius commodo odio. Nullam id iaculis justo. Donec aliquam cursus leo, non volutpat nisl finibus eget. Proin vel orci sit amet massa posuere sodales. Quisque luctus diam eget sollicitudin hendrerit. Pellentesque augue nibh, congue eu neque eu, maximus consequat tellus. Sed auctor quam et ante blandit, sed condimentum eros pellentesque. Nam et porttitor ligula, non porttitor urna. Integer ut tristique dolor, sagittis sollicitudin purus. In hac habitasse platea dictumst.</p>
                    </div>
                </div>
    		</div>
    	)
  }

export default HomePage;