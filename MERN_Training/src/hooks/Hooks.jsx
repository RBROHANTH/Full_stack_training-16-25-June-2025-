import React from 'react'
import { Link } from 'react-router-dom'
import './hooks.css'

const Hooks = () => {
  return (
    <div className='navbar2'>
        <Link to='/state' className='link2'>useState</Link>
        <Link to='/effect' className='link2'>useEffect</Link>
        <Link to='/effect2' className='link2'>useEffect2</Link>
    </div>
  )
}

export default Hooks