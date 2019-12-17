import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../../styles/stylesEvento';
//import {ApolloProvider} from 'react-apollo';

//import {Card} from 'native-base';
//import client from '../../../services/apollo';
//import Inserir from '../../../components/inserirE';

class Evento extends Component {
  render() {
    return (
      //<ApolloProvider client={client}>
      <View style={Styles.container}>
        <Text>NETO</Text>
      </View>
      //</ApolloProvider>
    );
  }
}

export default Evento;
