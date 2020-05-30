import React, { useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import './index.css'
import Authentication from '../../util/Authentication/Authentication';
import DropList from '../useDropList';
import DropItem from '../DropItem';
import useDropList from '../useDropList'

function Inventory(props) {
  const [items, loaded] = useDropList();

  useEffect(() => {
    if (!loaded) return;
    alert('Eat shit motherfucker');
    console.log('Loaded some new')
  }, [items?.length]);

  if(!items) return <div>Loading...</div>

  return (
    <div>
      {/*<DropList userId={this.Authentication.state.user_id || this.Authentication.state.opaque_id}/>*/}
      <CardGroup>
        {!items.length && <div>No items</div>}
        {items.map(item => <DropItem {...item} />)}
      </CardGroup>
    </div>
  )
}

export default Inventory
