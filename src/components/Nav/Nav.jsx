import React from 'react';
import './Nav.css';
import logo from '../../images/1680246442663.jpeg';


const Nav = () => {
    return (
        <div className='nav-bar'>
            <h1>Knowledge Cafe</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Nav;