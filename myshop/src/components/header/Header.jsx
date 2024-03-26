import React, { useState } from 'react';
import Link from '../UI/link/Link.jsx';
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderInfo from './HeaderInfo.jsx';

function Header({ navLinks, city, change, products }) {

    return (
        <header className="header">
            <HeaderNav navLinks={navLinks} city={city} change={change}/>
            
            <HeaderInfo products={products}/>
        </header>
    );
}

export default Header;
