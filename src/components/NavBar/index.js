import React from 'react'
import { Nav, Badge } from 'react-bootstrap'
import './index.css'

import useDropList from '../useDropList'

function NavBar({ onSelect }) {

  const [items] = useDropList();

  return (
    <Nav className="NavBar-container" fill defaultActiveKey="inventory" variant="pills" onSelect={(selectedKey) => onSelect(selectedKey)}>
      <Nav.Link eventKey="inventory">
        Inventory <Badge variant="danger" pill>{items?.length || 0}</Badge>
      </Nav.Link>
      <Nav.Link eventKey="profile">Profile</Nav.Link>
    </Nav>
  )
}

export default NavBar
