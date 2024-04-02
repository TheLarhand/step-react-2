import React from 'react';
import classes from './ProductPopup.module.css';
import Button from '../UI/button/Button';

const ProductPopup = ({product, toggleDetails}) => {
    return (
        <div className={classes.popup}>
            <div onClick={toggleDetails} className={classes.detail_back}/>
            <div className={`${classes.detail} ${classes.block}`}>
                <div style={{backgroundImage: `url(${product.image})`}} className={classes.image}></div>
                <div className={classes.info}>
                    <h2>{product.title}</h2>
                    <p>brand:  {product.brand}</p>
                    <p>year:  {product.year}</p>
                    <p>description: </p>
                    <p>{product.body}</p>
                    <Button>Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;