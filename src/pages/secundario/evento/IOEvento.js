import React, {Component} from 'react';
import {View} from 'react-native';
import Styles from '../../../styles/stylesEvento';
//import {ApolloProvider} from 'react-apollo';
import Inserir from '../../../components/inserir';
//import apolloClient from '../../services/apollo';

export default class Evento extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Inserir />
      </View>
    );
  }
}
