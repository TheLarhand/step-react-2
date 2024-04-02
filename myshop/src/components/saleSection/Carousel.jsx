import React from 'react';
import classes from './Carousel.module.css'

const Carousel = ({saleProducts}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.window}>
                <div className={classes.btnDisplay}>
                    <button className={classes.btn}>123</button>
                    <button className={classes.btn}>123</button>
                </div>
                <div className={classes.elements}>
                    {saleProducts.map((product, index) => (
                    <div
                        className={classes.element}
                        key={index}
                        style={{backgroundImage: `url(${product.image})`}}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;