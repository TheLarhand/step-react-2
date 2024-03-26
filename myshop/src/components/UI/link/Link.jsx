import React from 'react';
import classes from './Link.module.css';
import '../../../Fonts.css';

const Link = ({children, ...props}) => {
    return (
            <a className={classes.link} {...props}>
                {children}
            </a>          
    );
};

export default Link;