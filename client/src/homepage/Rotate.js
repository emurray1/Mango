import React, { Component } from 'react';

import TextRotator from '../utils/TextRotator';

const content = [
  {
    text: ' Businesses',
    className: 'animated fadeInUp rotate-text',
    animation: 'fade-up',
  },
  {
    text: ' Startups',
    className: 'animated fadeInUp rotate-text',
    animation: 'fade-up',
  },
  {
    text: ' Non-Profits',
    className: 'animated fadeInUp rotate-text',
    animation: 'fade-up',
  },
  {
    text: ' Organizations',
    className: 'animated fadeInUp rotate-text',
    animation: 'fade-up',
  },
];

const Rotate = () => (
    <div className='set-width'>
    	<TextRotator
      		content={content}
      		time={2000}
      		startDelay={1000}
    	/>
  	</div>
);

export default Rotate;