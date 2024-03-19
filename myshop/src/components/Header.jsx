import React from 'react';
import Link from './UI/link/Link.jsx'
import Button from './UI/button/Button.jsx';

function Header({navLinks}) {
    return (
        <header className="header">
            <div>
                <h2 className='header_name'>SHOP</h2>
                <p>cityName</p>
            </div>
            
            <nav className='header_nav'>
                {navLinks.map ((navLink) => 
                    <Link href={navLink.href}>{navLink.title}</Link>
                )}
            </nav>
            
            <div>
                <input type="text"/>
                <Button>выбрать</Button>
            </div>
            
        </header>
    );
}

export default Header;