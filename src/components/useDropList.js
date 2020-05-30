import React, { useEffect, useState, useCallback } from 'react';
import useInterval from '@use-it/interval';

import client from '../util/api'


function DropList({ userId = 'myLongId' } = {}) {
  const [items, setItems] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null);2

  useInterval(() => {
    async function loadDrops() {
      try {
        const { items } = await client.request(`
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
        setItems(items);

        if (!loaded) setLoaded(true)
      } catch (e) {
        setError(e)
      }
    }

    loadDrops()
  }, 1000);

  return  [items, loaded];
}

DropList.propTypes = {};

export default DropList;
