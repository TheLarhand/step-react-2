import React, { useState } from 'react';
import classes from './ProductBlock.module.css'
import Button from '../UI/button/Button';
import ProductPopup from './ProductPopup';

const ProductBlock = ({product}) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
        <div className={`${classes.wrapper} ${classes.block}`}>
            <div 
            style={{ backgroundImage: `url(${product.image})`}}
            className={classes.imgBox}
            />
            <h3>{product.title}</h3>
            <p>{product.body}</p>
            <Button onClick={toggleDetails}>More info</Button>
            {showDetails && (
                <ProductPopup
                    product={product}
                    toggleDetails={toggleDetails}
                />
                
                
            )
            }
            
        </div>
    );
};

export default ProductBlock;