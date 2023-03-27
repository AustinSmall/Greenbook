import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </header>
    )
}

export default Header;