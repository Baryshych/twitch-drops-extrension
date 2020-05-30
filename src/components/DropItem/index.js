import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import './index.css'
import Authentication from '../../util/Authentication/Authentication';

function DropItem({ name: itemName, imageLink} ) {
  const [showKey, setShowKey] = useState(false);
  const [key, setKey] = useState('1234-5678-1011-qqqWq');

  function takeItem() {
    setShowKey(!showKey);
  }

  function keyForm() {
    return <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control disabled type="text" defaultValue={this.state.key} />
      </Form.Group>
    </Form>
  }

  const [name, descr] = itemName.split('|');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageLink} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {descr}
        </Card.Text>
        {showKey ?
          keyForm() :
          <Button variant="primary" onClick={takeItem}>Take</Button>}

      </Card.Body>
    </Card>
  )
}

export default DropItem
