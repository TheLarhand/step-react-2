import React from 'react';
import Button from '../UI/button/Button.jsx';
import classes from './HeaderInfo.module.css';
import pic1 from '../../images/left man.png';
import pic2 from '../../images/right man.png';
import pic3 from '../../images/top header.png';
import pic4 from '../../images/bottom header.png';

const HeaderInfo = ({products}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.bigBox}>
                <img src={pic1} alt="" />
            </div>
            <div className={classes.center}>
                <div className={classes.smallBox}>
                    <img src={pic3} alt="" />
                </div>

                <div className={classes.centerBox}>
                    <h1>ULTIMATE <br/> SALE</h1>
                    <h3>We have {products.length} products!</h3>
                    <Button>SHOP NOW
                        fix me
                    </Button>
                </div>

                <div className={classes.smallBox}>
                    <img src={pic4} alt="" />
                    
                </div>
            </div>
            <div className={classes.bigBox}>
                <img src={pic2} alt="" />
            </div>
        </div>
    );
};

export default HeaderInfo;