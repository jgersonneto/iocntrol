import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles/stylesEvento';

Icon.loadFont();

export default class Evento extends Component {
  static navigationOptions = {
    title: 'EVENTO',
    tabBarLabel: '',
    tabBarIcon: ({focused}) => (
      <Icon name="truck" size={20} color={focused ? '#fff' : '#ddd'} />
    ),
  };
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('CadEvento');
          }}>
          <Text style={Styles.texto}>CADASTRO EVENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('EventoIO');
          }}>
          <Text style={Styles.texto}>EVENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('AltEvento');
          }}>
          <Text style={Styles.texto}>ALTERAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
