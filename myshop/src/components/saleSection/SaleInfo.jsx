import React from 'react';
import Button from '../UI/button/Button';
import classes from './SaleInfo.module.css'

const SaleInfo = ({info}) => {
    return (
        <div>
            <h2 className={classes.title}>
                {info.title}
            </h2>
            <p className={classes.text}> 
                {info.body}
            </p>
            <Button>Buy Now</Button>
        </div>
    );
}

export default SaleInfo;
