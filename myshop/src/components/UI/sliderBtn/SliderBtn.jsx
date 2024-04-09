import React from 'react';
import classes from './SliderBtn.module.css'
import leftArrowImage from '../../../images/UI/left.png';
import rightArrowImage from '../../../images/UI/right.png';

const sliderBtn = ({direction, handleFunc}) => {
    return (
        <button className={classes.btn} onClick={handleFunc}>
            {direction === 'left' ? (
                <img src={leftArrowImage} alt="left-arrow" />
            ) : (
                <img src={rightArrowImage} alt="right-arrow" />
            )}
        </button>
    );
};

export default sliderBtn;