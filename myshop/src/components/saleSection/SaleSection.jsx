import React from 'react';
import classes from './SaleSection.module.css';
import SaleInfo from './SaleInfo';

function SaleSection({saleContent}) {
    return (
        <div className={classes.background}>
            <div className={classes.wrapper}>
                <SaleInfo 
                    className={classes.info}
                    info={saleContent.saleSectionInfo}
                />
                <div className={classes.slider}></div>
            </div>
        </div>
    );
}

export default SaleSection;