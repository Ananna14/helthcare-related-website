import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
// import useFirebase from '../UseFirebase/UseFirebase'
import './LogIn.css'

const LogIn = () => {
    const{signInUsingGoogle} = useAuth();
    
    const location = useLocation();
const history= useHistory();
const redirect_uri = location.state?.from || '/home';


    const handelGoogleLogin=()=>{
signInUsingGoogle()
.then(result=>{
history.push(redirect_uri)
})
    }
    return (
        <div>
           <div className="half-width">
           <h2>Login</h2>
           <input type="email" className="contact" name="" id="" placeholder="Email"/><br/>
            <input type="password" className="contact" name="" id="" placeholder="password"/><br/>
            <button className="color">Login</button>
            <p>new to helthcare related website?<Link to="/register">Create-account</Link></p>
           </div>
            <br/>
            <div>---------------or-----------------</div>
            <button className="color" onClick={handelGoogleLogin}>Google Sign In</button>
        </div>
    )
}

export default LogIn
