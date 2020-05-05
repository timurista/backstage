import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const TEMP_API_GATEWAY = 'http://cdo-api.dev.msc.rokulabs.net/';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: TEMP_API_GATEWAY,
  fetch,
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache,
  link,

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
