import React, { useState } from 'react';
import Link from '../UI/link/Link.jsx';
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import classes from './HeaderNav.module.css'

const HeaderNav = ({ navLinks, city, change }) => {
    const [newCity, setNewCity] = useState('');

    const changeNewCity = () => {
        change(newCity); // Передаем текущее значение нового города в функцию change
        setNewCity(''); // Очищаем новый город после передачи
    };

    return (
        <div className={classes.wrapper}>
            <div>
                <h2 className={classes.name}>SHOP</h2>
                <p>{city}</p>
            </div>
            
            <nav className={classes.nav}>
                {navLinks.map((navLink, index) => 
                    <Link key={index} href={navLink.href}>
                        {navLink.title}
                    </Link>
                )}
            </nav>
            
            <div className={classes.inputBlock}>
                <Input onChange={e => setNewCity(e.target.value)} />
                <Button onClick={changeNewCity}>Select city</Button>
            </div>
        </div>
    );
};

export default HeaderNav;