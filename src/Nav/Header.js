import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link className="heading" to="/home">HOME</Link>
            <Link className="heading" to="/services">SERVICES</Link>
            <Link className="heading" to="/about">ABOUT</Link>
            <Link className="heading" to="/contact">CONTACT</Link>
        </div>
    )
}

export default Header
