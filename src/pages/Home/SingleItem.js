import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './SingleItem.css'

const SingleItem = ({user}) => {
    const {name, img, description} = user
    return (
        <div className="single-items">
            <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text> {name}</Card.Text>
          <Card.Text> {description}</Card.Text>
    <button className="btn-color">Details</button>
    {/* <a className="btn-color" href="{Overview}">Details</a> */}
        </Card.Body>
      </Card>
      </Col>
        </div>
    )
}

export default SingleItem
