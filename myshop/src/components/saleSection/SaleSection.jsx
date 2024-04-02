import React from 'react';
import classes from './SaleSection.module.css';
import SaleInfo from './SaleInfo';
import Carousel from './Carousel';

function SaleSection({mainContent}) {
    const saleProducts = () => {
        let products = mainContent.products
        return products.filter(product => product.sale === true)
    }
    return (
        <div className={classes.background}>
            <div className={classes.wrapper}>
                <SaleInfo 
                    info={mainContent.saleSectionInfo}
                />
                <Carousel
                    saleProducts={saleProducts()}
                />

            </div>
        </div>
    );
}

export default SaleSection;