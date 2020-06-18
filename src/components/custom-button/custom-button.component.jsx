import React from 'react';
import './custom-button.style.scss';
const CustomButton = ({ children, isGoogleSignIn, onClick, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick}>
        {children}
    </button>
);

export default CustomButton;