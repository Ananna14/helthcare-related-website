import React, { useEffect, useState } from 'react'
import SingleItem from './SingleItem'
import { Row } from 'react-bootstrap'
import './Home.css'
// import banner1 from '../../../images/banner-1.png'

const Home = () => {
   const [users, setUsers] = useState([])

   useEffect(()=>{
       fetch('fakeData.json')
       .then(res=>res.json())
       .then(data => setUsers(data))
   },[])
    return (
        <div>
           <Row xs={1} md={2} className="g-4 single-item">
            {
                users.map(user=><SingleItem user={user}></SingleItem>)
            }
            </Row>
        
        </div>
    )
}

export default Home
