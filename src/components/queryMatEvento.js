import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import gql from 'graphql-tag';
import {ApolloProvider, Query} from 'react-apollo';
import {useQuery} from 'react-apollo';
import {useMutation} from 'react-apollo'; 
import client from '../services/apollo';
//import Styles from '../styles/stylesQueryEvento';

/*function Mostrar() {
  const {loading, error, data} = useQuery(EVENTO_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return data.evento.map(({NOME_E}) => <Text key={NOME_E}>{NOME_E}</Text>);
}*/

export default class MostrarNomeIO extends Component {
  state = {
    NOME: [],
    Atualiza: true,
    Evento: this.props.nome,
  };

  componentDidMount() {
    this.loadIOEvento();
    var timer = setInterval(
      () => this.setState({Atualiza: !this.state.Atualiza}),
      1000,
    );
  }

  /*loadIOEvento = () => {
    const {loading, error, data} = useQuery(IOEVENTO_QUERY);

    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error :(</p>;
    }

    const IOEVENTO_QUERY = gql`
      query IOesp($R_NOME_E: String) {
        ioevento(where: {R_NOME_E: {_eq: $R_NOME_E}}) {
          R_NOME_P
          OUTQTD
          INQTD
          Prod {
            QTD
          }
        }
      }
    `;
    let [R_NOME_E, setINQTD] = useState('');
    let [IOesp, {data, error}] = useMutation(IOEVENTO_QUERY);

    const handleFinalize = () => {
      IOesp({
        variables: {
          R_NOME_E: this.state.Evento,
        },
      });
    };
  };*/
  render() {
    this.loadUser();
    return (
      <ApolloProvider client={client}>
        <View>
          <Query query={IOEVENTO_QUERY}>
            {({loading, data}) => {
              if (loading) {
                return <Text>Carregando...</Text>;
              }
              const {ioevento} = data;
              return ioevento.map(ioevent => (
                <Text key={ioevent.R_NOME_P}>{ioevent.R_NOME_P}</Text>
              ));
            }}
          </Query>
        </View>
      </ApolloProvider>
    );
  }
}

const IOEVENTO_QUERY = gql`
  query IOesp($R_NOME_E: String) {
    ioevento(where: {R_NOME_E: {_eq: $R_NOME_E}}) {
      R_NOME_P
      INQTD
      OUTQTD
      Prod {
        QTD
      }
    }
  }
`;

client
  .query({
    query: IOEVENTO_QUERY,
  })
  .then(res => console.log(res));

//export default Mostrar;
