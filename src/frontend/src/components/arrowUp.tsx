import React from 'react';

const ArrowUp = ({ fill = '#1C9921', width = 12, height = 12 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_225_2022)">
     <path d="M16.59 15.4099L12 10.8299L7.41 15.4099L6 13.9999L12 7.99991L18 13.9999L16.59 15.4099Z" fill={fill}/>
    </g>
    <defs>
      <clipPath id="clip0_225_2022">
        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
      </clipPath>
    </defs>
  </svg>
);

export default ArrowUp;
