import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className= " bg-green-700 mb-4 py-2 flex-row align-center ">
            <div className='container flex-row justify-space-between-lg justify-center align-center'>
                <nav className='text-center '>
                <Link to="/about">About</Link>
                <Link to="/locations">Locations</Link>
                </nav>
            </div>

        </header>

    )
}

export default Header;