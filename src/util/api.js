import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:3001';

const jwt = window.Twitch.ext.viewer.sessionToken;

const client = new GraphQLClient(endpoint, {
  credentials: 'omit',
  mode: 'no-cors',
  headers: {
    authorization: `Bearer ${jwt}`,
  }
})

export default client;
