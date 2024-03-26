import React from 'react';
import classes from './MainDescription.module.css';

const MainDescriptin = ({info}) => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>
                {info.title}
            </h2>
            <p className={classes.body}>
                {info.body}
            </p>
        </div>
    );
};

export default MainDescriptin;