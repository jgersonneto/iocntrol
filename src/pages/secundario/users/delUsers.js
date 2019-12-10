import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Styles from '../../../styles/stylesDelUsers';

export default class DelUsers extends Component {
  static navigationOptions = {
    title: 'DELUSER',
  };
  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.containerTexto}>
          <Text style={Styles.texto}>USER NAME:</Text>
          <TextInput style={Styles.input} placeholder="Digite seu usuario" />
        </View>
        <View style={Styles.containerBotao}>
          <TouchableOpacity
            style={Styles.botao}
            //onPress={ () => {this.props.navigation.navigate('Main')} }
          >
            <Text style={Styles.textoBotao}>DELETAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.botao}
            onPress={() => {
              this.props.navigation.navigate('Users');
            }}>
            <Text style={Styles.textoBotao}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
