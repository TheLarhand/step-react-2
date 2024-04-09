import React, { useState } from 'react';
import classes from './Carousel.module.css';
import SliderBtn from '../UI/sliderBtn/SliderBtn.jsx'

const Carousel = ({saleProducts}) => {
    const [offset, setOffset] = useState(0);

    const PAGE_WIDTH = 420;

    const handleLeftArrowClick = () => {
        const newOffset = Math.max(offset - PAGE_WIDTH, 0)
        setOffset(newOffset)
    }
    const handleRightArrowClick = () => {
        const newOffset = Math.min(offset + PAGE_WIDTH, (saleProducts.length - 1) * PAGE_WIDTH)
        setOffset(newOffset)
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.btnDisplay}>
                <SliderBtn handleFunc={handleLeftArrowClick} direction={'left'}/>
                <SliderBtn handleFunc={handleRightArrowClick} direction={'right'}/>
            </div>
            <div className={classes.window}>
                <div style={{transform: `translateX(-${offset}px)`}} className={classes.elements}>
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