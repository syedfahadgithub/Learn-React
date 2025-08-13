import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (
    <>
      <nav className='nav'>
        <h2>{props.logo}</h2>
        <Navbar2/>
      </nav>
    </>
  )
}

export default Navbar