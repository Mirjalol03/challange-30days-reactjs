import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="container">
            <div className="nav__wrapper">
                <a href="/" className="nav__brand--logo">Logo</a>
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" className="nav__link">Home</NavLink>
                    </li>
                    {/* <li className="nav__item">
                        <NavLink to="/users" className="nav__link">Users</NavLink>
                    </li> */}
                </ul>
                </div>

        </div>
    </nav>
  )
}

export default Navbar
