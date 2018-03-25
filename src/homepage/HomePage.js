import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rotate from './Rotate';
import PortfolioSlider from './HomepagePortfolio';


import './homepage.css';
import HeroVideo from '../images/girls_code.mp4';

const HomePage = () => {
		return (
    		<div className='homepage container-fluid'>
                <div className="row mission-statement d-none d-md-block">
                    <div className="fullscreen-bg col-12">
                        <video className="fullscreen-bg_video" autoPlay loop >
                            <source src={HeroVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container text-white">
                        <row className="d-flex justify-content-center">
                            <h2>We design & develop web & mobile apps</h2>
                        </row>
                        <row>
                            <div className="col-12 col-md-6 left d-flex justify-content-end mr-auto">
                                <h2>to support </h2>
                            </div>
                            <div className="col-12 col-md-6 right d-flex justify-content-start ml-auto">
                                <h2><Rotate /></h2>
                            </div>
                        </row>
                        <row>
                            <div className="col-12 d-flex justify-content-center">
                                <h2>on their missions.</h2>
                            </div>
                        </row>
                    </div>
                </div>
                <div className="container-fluid bg-white">
                    <PortfolioSlider />
                </div>
                <div className="container-fluid bg-primary">
                    <div className="container">
                    <div className="row">
                        <div className="col-3 bg-secondary">
                        </div>
                         <div className="col-3 bg-secondary">
                        </div>
                         <div className="col-3 bg-secondary">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 bg-secondary">
                        </div>
                         <div className="col-3 bg-secondary">
                        </div>
                         <div className="col-3 bg-secondary">
                        </div>
                    </div>
                    </div>
                </div>
            </div>		
    	)
  }

export default HomePage;