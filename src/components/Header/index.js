import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className= "flex-row align-center bg-black text-white">
            <div className='container flex-row justify-space-between-lg '>
                <Link to="/">
                    <h1 className='text-4xl '>Greenbooks</h1>
                </Link>
                <nav className='text-center space-x-4'>
                <Link to="/about" className=''>About</Link>
                <Link to="/locations">Locations</Link>
                <Link to = "/timeline"> Timeline</Link>
                </nav>
            </div>

        </header>

    )
}

export default Header;