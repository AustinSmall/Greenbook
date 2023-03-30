import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className= " bg-green-700 mb-4 py-1 flex-row align-center ">
            <div className='container flex-row justify-space-between-lg justify-center align-center'>
                <Link to="/">
                    <h1 className='text-4xl'>Greenbooks</h1>
                </Link>
                <nav className='text-center space-x-4'>
                <Link to="/about" className=''>About</Link>
                <Link to="/locations">Locations</Link>
                </nav>
            </div>

        </header>

    )
}

export default Header;