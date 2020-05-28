import React from 'react'
import { Nav, Badge } from 'react-bootstrap'
import './index.css'

class NavBar extends React.Component{

    render(){
            return(
                <div className="NavBar-container">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link eventKey="disabled" disabled>
                            Inventory <Badge variant="danger" pill>9</Badge>
                        </Nav.Link>
                        <Nav.Link eventKey="link-1" >
                            Predictions
                        </Nav.Link>
                        <Nav.Link eventKey="link-2">Profile</Nav.Link>
                    </Nav>
                </div>
            )
    }
}

export default NavBar