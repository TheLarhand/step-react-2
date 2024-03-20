import React, { useState } from 'react';
import Link from './UI/link/Link.jsx';
import Button from './UI/button/Button.jsx';
import Input from './UI/input/Input.jsx';

function Header({ navLinks, city, change }) {
    const [newCity, setNewCity] = useState('');

    const changeNewCity = () => {
        change(newCity); // Передаем текущее значение нового города в функцию change
        setNewCity(''); // Очищаем новый город после передачи
    };

    return (
        <header className="header">
            <div>
                <h2 className='header_name'>SHOP</h2>
                <p>{city}</p>
            </div>
            
            <nav className='header_nav'>
                {navLinks.map((navLink, index) => 
                    <Link key={index} href={navLink.href}>
                        {navLink.title}
                    </Link>
                )}
            </nav>
            
            <div>
                <Input onChange={e => setNewCity(e.target.value)} />
                <Button onClick={changeNewCity}>выбрать</Button>
            </div>
        </header>
    );
}

export default Header;
