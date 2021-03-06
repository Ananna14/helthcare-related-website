import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SingleItem.css'

const SingleItem = ({user}) => {
    const {name, img, description, Overview} = user
    return (
        <div className="single-items">
            <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text> {name}</Card.Text>
          <Card.Text> {description}</Card.Text>
    <Link to={`/details/${Overview}`}><button className="btn-color">Details</button></Link>
    {/* <a className="btn-color" href="{Overview}">Details</a> */}
        </Card.Body>
      </Card>
      </Col>
        </div>
    )
}

export default SingleItem
