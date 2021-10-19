import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
// import useFirebase from '../UseFirebase/UseFirebase'
import './Header.css'

const Header = () => {
// const {user, logOut} = useFirebase()
const {user, logOut} = useAuth()
    return (
        <div className="background">
            <Link className="heading" to="/home">HOME</Link>
            <Link className="heading" to="/services">SERVICES</Link>
            <Link className="heading" to="/about">ABOUT</Link>
            <Link className="heading" to="/contact">CONTACT</Link>
            {user.email && <span style={{color:'black'}}>Hello {user.displayName}</span>}
           { 
           user.email?
           <button onClick={logOut}>log out</button>
           :
           <Link className="log" to="/login">LOGIN</Link>}
        </div>
    )
}

export default Header
