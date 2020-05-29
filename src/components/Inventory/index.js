import React from 'react'
import { CardGroup} from 'react-bootstrap'
import './index.css'
import Authentication from "../../util/Authentication/Authentication";
import DropList from "../DropList";
import DropItem from "../DropItem";

class Inventory extends React.Component {
    constructor(props) {
        super(props)
        this.Authentication = new Authentication()

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
    }

    render() {
        return (
            <div>
                {/*<DropList userId={this.Authentication.state.user_id || this.Authentication.state.opaque_id}/>*/}
                <CardGroup>
                    <DropItem/>
                    <DropItem/>
                    <DropItem/>
                </CardGroup>
            </div>
        )
    }
}

export default Inventory