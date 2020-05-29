import React from 'react'
import './index.css'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.Authentication = this.props.authentication

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
    }
    render() {
        return (
            <div>
                <p>Hello world!</p>
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