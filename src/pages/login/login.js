import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
//import {ApolloProvider} from 'react-apollo';
import Styles from '../../styles/stylesLogin';
//import apolloClient from '../../services/apollo';

export default class Login extends Component {
  render() {
    return (
      //<ApolloProvider client={apolloClient}>
      <View style={Styles.container}>
        <Image
          source={require('../../image/indice2.png')}
          style={Styles.logo}
        />
        <TextInput style={Styles.input} placeholder="Digite seu usuario" />

        <TextInput
          style={Styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Routes');
          }}>
          <Text style={Styles.texto}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      //</ApolloProvider>
    );
  }
}
