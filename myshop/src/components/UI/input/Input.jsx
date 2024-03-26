import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.wrapper}>
            <input className={classes.input} {...props} type="text" />
        </div>
    );
}

export default Input;
