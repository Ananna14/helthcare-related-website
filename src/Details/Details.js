import React from 'react'
import { useParams } from 'react-router'
import './Details.css'

const Details = () => {
    const {userOverview} = useParams()
    return (
        <div>
            <h1 className="overView">Overview: {userOverview}</h1>
        </div>
    )
}

export default Details
