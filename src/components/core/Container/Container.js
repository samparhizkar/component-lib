import React from 'react';
import './Container.css';

function Container({children, className = "", ...props}) {
    return (
        <div className={className} {...props}>
            {children}</div>
    )
}

export default Container;
