import React, { useState } from 'react';
import ProductBlock from './ProductBlock';
import classes from './MainProducts.module.css';
import Button from '../UI/button/Button';

const MainProducts = ({ products }) => {
    const [visibleProducts, setVisibleProducts] = useState(3); // Начальное количество отображаемых товаров

    const handleViewMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3); // При нажатии на кнопку добавляем следующие три товара
    };

    return (
        <div>
            <div className={classes.wrapper}>
                {products.slice(0, visibleProducts).map((product, index) => (
                    <ProductBlock
                        key={index}
                        product={product}
                    />
                ))}
            </div>

            {/* Показывать кнопку "View More", если количество отображаемых товаров меньше общего количества товаров */}
            {visibleProducts < products.length && (
                <div className={classes.more}>
                    <Button onClick={handleViewMore}>
                        View More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default MainProducts;