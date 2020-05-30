import React from 'react'
import { Nav, Badge } from 'react-bootstrap'
import './index.css'

class NavBar extends React.Component{

    render(){
            return(
                <div className="NavBar-container">
                    <Nav defaultActiveKey="inventory" variant="pills" onSelect={(selectedKey) => this.props.onSelect(selectedKey)}>
                        <Nav.Link eventKey="inventory">
                            Inventory <Badge variant="danger" pill>9</Badge>
                        </Nav.Link>
                        <Nav.Link eventKey="profile">Profile</Nav.Link>
                    </Nav>
                </div>
            )
    }
}

export default NavBar