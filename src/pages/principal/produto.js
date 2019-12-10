import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles/stylesProduto';

Icon.loadFont();

export default class Produto extends Component {
  static navigationOptions = {
    title: 'PRODUTO',
    tabBarLabel: '',
    tabBarIcon: ({focused}) => (
      <Icon name="book" size={20} color={focused ? '#fff' : '#ddd'} />
    ),
  };
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('CadProduto');
          }}>
          <Text style={Styles.texto}>CADASTRO PRODUTO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('DelProduto');
          }}>
          <Text style={Styles.texto}>DELETAR PRODUTO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('AltProduto');
          }}>
          <Text style={Styles.texto}>ALTERAR PRODUTO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
