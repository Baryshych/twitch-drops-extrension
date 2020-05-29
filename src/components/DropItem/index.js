import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import './index.css'
import Authentication from "../../util/Authentication/Authentication";

class DropItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showKey: false,
            key: '1234-5678-1011-qqqWq'
        }
        this.takeItem = this.takeItem.bind(this)
    }

    takeItem() {
        this.setState({showKey: !this.state.showKey})
    }

    keyForm() {
        return <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control disabled type="text" defaultValue={this.state.key} />
            </Form.Group>
        </Form>
    }

    render(){
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/e3/f5/cc/e3f5cc209e26077fba05f841fdf490be.png" />
                    <Card.Body>
                        <Card.Title>Item name</Card.Title>
                        <Card.Text>
                            Small item explanation on flaw text
                        </Card.Text>
                        {this.state.showKey ?
                            this.keyForm() :
                            <Button variant="primary" onClick={this.takeItem}>Take</Button> }

                    </Card.Body>
                </Card>
            )
    }
}

export default DropItem