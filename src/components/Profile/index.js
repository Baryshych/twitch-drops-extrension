import React from 'react'
import './index.css'

import { Alert, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.Authentication = this.props.authentication

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
    }
    render() {
        console.log(this.Authentication.state)
        return (
            <div>
                <Alert variant="danger">Stream is offline</Alert>
                <Alert variant="success">All prerequisites met!</Alert>
                <ListGroup variant="flush">
                    <ListGroup.Item variant="success"><FontAwesomeIcon icon={faCheckSquare} /> Logged in</ListGroup.Item>
                    <ListGroup.Item variant="success"><FontAwesomeIcon icon={faCheckSquare} /> Watched an hour today</ListGroup.Item>
                    <ListGroup.Item variant="success"><FontAwesomeIcon icon={faCheckSquare} /> Watched a three hours overall</ListGroup.Item>
                </ListGroup>
                <p>My token is: <span style={{overflowWrap: 'break-word'}}>{this.Authentication.state.token}</span></p>
                <p>My opaque ID is {this.Authentication.getOpaqueId()}.</p>
                <div>{this.Authentication.isModerator() ?
                    <p>I am currently a mod, and here's a special mod button <input value='mod button' type='button'/>
                    </p> : 'I am currently not a mod.'}</div>
                <p>I
                    have {this.Authentication.hasSharedId() ? `shared my ID, and my user_id is ${this.Authentication.getUserId()}` : 'not shared my ID'}.</p>
            </div>
        )
    }
}

export default Profile