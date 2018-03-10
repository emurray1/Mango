import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './rotate.css';
import TextRotator from '../utils/TextRotator';

const content = [
  {
    text: 'Developers',
    className: 'rotate-text',
    animation: 'fade-up',
  },
  {
    text: 'Innovators',
    className: 'rotate-text',
    animation: 'fade-up',
  },
  {
    text: 'Innovators',
    className: 'rotate-text',
    animation: 'fade-up',
  },
  {
    text: 'Developers',
    className: 'rotate-text',
    animation: 'fade-up',
  },
  {
    text: 'Developers',
    className: 'rotate-text',
    animation: 'fade-up',
  },
];

const Rotate = () => (
    <div>
    	<TextRotator
      		content={content}
      		time={2000}
      		startDelay={1000}
    	/>
  	</div>
);

export default Rotate;