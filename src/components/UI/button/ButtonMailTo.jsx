import React from 'react';
import {Link} from "react-router-dom";
import './Buttons.scss'

const ButtonMailTo = ({className, mailto, children}) => {
    return (
        <Link
            className={className}
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {children}
        </Link>
    );
};

export default ButtonMailTo;