import React from 'react';

const SBILogo = ({ size = 40, color = "#1E3A8A" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="12" fill={color} />
        <circle cx="12" cy="12" r="3.5" fill="white" />
        <rect x="10.5" y="12" width="3" height="12" fill="white" />
    </svg>
);

export default SBILogo;
