import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from '../../../styles/stylesUsers';

export default class AltUsers extends Component {
  static navigationOptions = {
    title: 'USERS',
  };
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.botao}
          //onPress={ () => {this.props.navigation.navigate('Main')} }
        >
          <Text style={Styles.texto}>CADASTRO USUÁRIO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
