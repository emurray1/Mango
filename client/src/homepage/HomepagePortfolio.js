import React, { Component } from 'react';



import DriftEast from '../images/deslw.png';
import Nescaum from '../images/nescaum_logo.png';

import './HomepagePortfolio.css';

class PortfolioSlider extends Component {
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-3 controls">
						<i className="fas fa-arrow-circle-left fa-3x text-secondary"></i>
					</div>
					<div className="col-6">
						<img className="logo img" alt='DriftEast Logo'  src={DriftEast} />
						<img className="logo img" alt='Nescaum Logo'  src={Nescaum} />
					</div>
					<div className="col-3 controls">
						<i className="fas fa-arrow-circle-right fa-3x text-secondary"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioSlider;