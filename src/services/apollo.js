import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httplink = new HttpLink({
  uri: 'http://iocontrolserver.herokuapp.com/v1/graphql',
});

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache(),
});

export default client;
