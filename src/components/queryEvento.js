import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';
import {ApolloProvider, Query} from 'react-apollo';
import client from '../services/apollo';
//import Styles from '../styles/stylesQueryEvento';
/*
function Mostrar() {
  const {loading, error, data} = useQuery(EVENTO_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return data.evento.map(({NOME_E}) => <Text key={NOME_E}>{NOME_E}</Text>);
}*/

export default class Mostrar extends Component {
  constructor(props) {
    super(props);
    this.state = {Atualiza: true};
  }

  componentDidMount() {
    setTimeout(() => this.setState({Atualiza: !this.state.Atualiza}), 5000);
    var timer = setInterval(
      () => this.setState({Atualiza: !this.state.Atualiza}),
      1000,
    );
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          <Query query={EVENTO_QUERY}>
            {({loading, data}) => {
              if (loading) {
                return <Text>Carregando...</Text>;
              }
              const {evento} = data;
              return evento.map(event => (
                <Text key={event.NOME_E}>{event.NOME_E}</Text>
              ));
            }}
          </Query>
        </View>
      </ApolloProvider>
    );
  }
}

const EVENTO_QUERY = gql`
  query Evento {
    evento {
      NOME_E
    }
  }
`;

client
  .query({
    query: EVENTO_QUERY,
  })
  .then(res => console.log(res));

//export default Mostrar;
