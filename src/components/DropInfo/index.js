import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        count: state
    };
};

class DropInfo extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
        this.state={
        }
    }

    render(){
            window.Twitch.ext.rig.log(this.props.count);
            return(
                    <div>
                        Loading...
                    </div>
            )
    }
}

export default connect(mapStateToProps, DropInfo)