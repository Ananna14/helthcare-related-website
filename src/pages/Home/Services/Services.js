import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import './Services.css'
import SingleService from './SingleService'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('dataCreate.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <h2>OUR SERVICES</h2>
             <Row xs={1} md={2} className="g-4 single-item">
            {
                services.map(service=><SingleService
                    key={service.name}
                    service={service}
                    ></SingleService>)
            }
            </Row>
           
        </div>
    )
}

export default Services
