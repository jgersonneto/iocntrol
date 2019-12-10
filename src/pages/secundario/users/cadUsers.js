import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Styles from '../../../styles/stylesUsersCad';

export default class CadUser extends Component {
  static navigationOptions = {
    title: 'CADUSERS',
  };
  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.containerTexto}>
          <Text style={Styles.texto}>USER NAME:</Text>
          <TextInput style={Styles.input} placeholder="Digite seu usuario" />
          <Text style={Styles.texto}>SENHA:</Text>
          <TextInput style={Styles.input} placeholder="Digite sua senha" />
          <Text style={Styles.texto}>CONFIRMAR SENHA:</Text>
          <TextInput style={Styles.input} placeholder="Digite sua senha" />
        </View>
        <View style={Styles.containerCheckBox}>
          <CheckBox
            title="Administrador"
            //checked={this.state.checked}
          />
          <CheckBox
            title="Usuario"
            //checked={this.state.checked}
          />
        </View>
        <View style={Styles.containerBotao}>
          <TouchableOpacity
            style={Styles.botao}
            //onPress={ () => {this.props.navigation.navigate('Main')} }
          >
            <Text style={Styles.textoBotao}>CADASTRO USUÁRIO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
