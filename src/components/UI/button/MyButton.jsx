import React from 'react';
import './Buttons.scss';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default MyButton;