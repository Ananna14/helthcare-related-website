import React from 'react'
import useFirebase from '../UseFirebase/UseFirebase'
import './LogIn.css'

const LogIn = () => {
    const{user, signInUsingGoogle} = useFirebase()
    return (
        <div>
           <div className="half-width">
           <input type="email" className="contact" name="" id="" placeholder="Email"/><br/>
            <input type="password" className="contact" name="" id="" placeholder="password"/><br/>
            <button className="color">Login</button>
           </div>
            <br/>
            <div>---------------or-----------------</div>
            <button className="color" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    )
}

export default LogIn
