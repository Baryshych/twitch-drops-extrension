import React, { useEffect, useState } from 'react';
import useInterval from '@use-it/interval';

import client from '../util/api'


function DropList({ userId }) {
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)

  useInterval(() => {
    async function loadDrops() {
      try {
        const loadedItems = await client.request(`
      query getDrops($userId:String!) {
        items: dropItems(viewer: $userId) {
          id
          name
          imageLink
        }
      }
      
      `, {
          userId
        });
        setItems(loadedItems);
        console.log('loaded',loadedItems)
      } catch (e) {
        setError(e)
      }
    }

    loadDrops()
  }, 1000);


  return 'asdasd';
}

DropList.propTypes = {};

export default DropList;
