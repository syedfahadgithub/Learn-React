import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='nav'>
    <div className='navL'>
        <h1>logo
            <input type="text" placeholder='Search' />
        </h1>
        
    </div>
    <div className='navR'>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </div>
    </>
  )
}

export default Header