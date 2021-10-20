import React, { useState } from 'react'
// import { createUserWithEmailAndPassword, Auth} from "firebase/auth";
import { getAuth,  createUserWithEmailAndPassword} from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
// import useFirebase from '../UseFirebase/UseFirebase'
import './LogIn.css'

const LogIn = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);

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

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }

    const handelEmailChange= e =>{
        setEmail(e.target.value)
    }

    const handelPasswordChange = e =>{
        setPassword(e.target.value)
    }
    
    const handelRegistration = e =>{
        console.log(email, password);
        createUserWithEmailAndPassword(auth,email, password)
        .then((result)=>{
        const user = result.user;
        console.log(user)
        })
        e.preventDefault();
    }
    return (
        <div>
           <div className="half-width">
           <h2 className="text-primary">Please {isLogin ? 'Login': 'Register'}</h2>
           <input onBlur={handelEmailChange} type="email" className="contact" name="" id="" placeholder="Email"/><br/>
            <input onBlur={handelPasswordChange} type="password" className="contact" name="" id="" placeholder="password"/><br/>
            <input onChange={toggleLogin} type="checkbox" name="" id="" />
            <label className="form-check-label" htmlFor="gridcheck1">Already Registered?</label><br/><br/>
            <button className="color" onClick={handelRegistration}>{isLogin ? 'Login' : 'Register'}</button>
            <p>new to helthcare related website?<Link to="/register">Create-account</Link></p>
           </div>
            <br/>
            <div>---------------or-----------------</div>
            <button className="color" onClick={handelGoogleLogin}>Google Sign In</button>
        </div>
    )
}

export default LogIn
