import React from 'react';
import MainDescriptin from './MainDescriptin';
import MainProducts from './MainProducts';

function MainSection({mainContent}) {
    return (
        <div className='main_section'>
            <MainDescriptin info={mainContent.mainSectionInfo}/>
            <MainProducts products={mainContent.products}/>
        </div>
    );
}

export default MainSection;