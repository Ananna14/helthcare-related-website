import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form >
                    <input className="contact" type="text" name="" id="" placeholder="Name"/><br/>
                    <input className="contact" type="email" name="" id="" placeholder="Email"/><br/>
                    <input className="contact" type="password" name="" id="" placeholder="password"/><br/>
                    <input className="contact" type="password" name="" id="" placeholder="Re-enter password"/><br/>
                    <input className="color" type="submit" value="submit" placeholder="submit" /><br/>
                </form>
                <p>Already have an account? <Link to="/login">LOGIN</Link></p>
            </div>
        </div>
    )
}

export default Register
