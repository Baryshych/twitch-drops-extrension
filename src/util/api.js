import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:3001/graphql';

const jwt = window.Twitch.ext.viewer.sessionToken;

const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json'
    //authorization: `Bearer ${jwt}`,
  }
})

export default client;
