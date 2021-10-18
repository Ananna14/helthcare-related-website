import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h2 className="head">CONTACT US FOR FREE CONSULTATION</h2>
            <div >
            <input className="contact" type="text" name="" id="" placeholder="Name" /><br/>
            <input className="contact" type="email" name="" id="" placeholder="Email" /><br/>
            <input className="contact" type="text" name="" id="" placeholder="message"/><br/>

                <input className="contact" type="text" name="" id="" placeholder="Last Name"/><br/>
                <input className="contact" type="number" name="" id="" placeholder="Phone"/><br/>
                <p>I am interested in service</p>
            <button className="color">Submit</button>
            </div>

        </div>
    )
}

export default Contact
