import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to = '/' className='link'>HOME</Link>
            <Link to = '/about' className='link'>ABOUT</Link>
            <Link to = '/contact' className='link'>CONTACT</Link>
            <Link to = '/skills' className='link'>SKILLS</Link>
            <Link to = '/counter' className='link'>COUNTER</Link>
            <Link to = '/child' className='link'>CHILD</Link>
            <Link to = '/hooks' className='link'>HOOKS</Link>
            <Link to = '/login' className='link'>LOGIN</Link>
            <Link to = '/ref' className='link'>REF</Link>
            <Link to = '/reducer' className='link'>REDUCER</Link>
        </nav>
    </div>
  )
}

export default Navbar
