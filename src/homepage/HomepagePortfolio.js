import React, { Component } from 'react';

class PortfolioSlider extends Component {
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<button id="left"><i class="fas fa-arrow-circle-left"></i></button>
					</div>
					<div className="col-sm-6">
						<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
					</div>
					<div className="col-sm-3">
						<button id="right"><i class="fas fa-arrow-circle-right"></i></button>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioSlider;