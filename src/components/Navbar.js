import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <img  className='logo' src='/images/logo.png'  alt=''/>

        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Blog</a></li>
            <li className='active'><a href=''>Join Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar