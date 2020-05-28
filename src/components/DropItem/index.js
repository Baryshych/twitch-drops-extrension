import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './index.css'

class DropItem extends React.Component{

    render(){
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/e3/f5/cc/e3f5cc209e26077fba05f841fdf490be.png" />
                    <Card.Body>
                        <Card.Title>Item name</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Take</Button>
                    </Card.Body>
                </Card>
            )
    }
}

export default DropItem