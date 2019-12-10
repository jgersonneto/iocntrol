import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles/stylesUsers';

Icon.loadFont();

export default class User extends Component {
  static navigationOptions = {
    title: 'USERS',
    tabBarLabel: 'USERSTT',
    tabBarIcon: ({focused}) => (
      <Icon name="user" size={10} color={focused ? '#fff' : '#ddd'} />
    ),
  };
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('CadUsers');
          }}>
          <Text style={Styles.texto}>CADASTRO USUÁRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            this.props.navigation.navigate('DelUsers');
          }}>
          <Text style={Styles.texto}>DELETAR USUÁRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => {
            //this.props.navigation.navigate('DelUsers');
          }}>
          <Text style={Styles.texto}>ALTERAR USUÁRIO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
