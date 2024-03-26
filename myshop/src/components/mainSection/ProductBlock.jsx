import React, { useState } from 'react';
import classes from './ProductBlock.module.css'
import Button from '../UI/button/Button';

const ProductBlock = ({product}) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
        <div className={`${classes.wrapper} ${classes.block}`}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.body}</p>
            <Button onClick={toggleDetails}>More info</Button>
            {showDetails && (
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
                
                
            )
            }
            
        </div>
    );
};

export default ProductBlock;