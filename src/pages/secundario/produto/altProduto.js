import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Styles from '../../../styles/stylesAltProduto';

export default class CadProduto extends Component {
  static navigationOptions = {
    title: 'ALTPRODUTO',
  };
  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.containerTexto}>
          <Text style={Styles.texto}>NOME DO PRODUTO:</Text>
          <TextInput style={Styles.input} placeholder="Digite o produto" />
          <Text style={Styles.texto}>QUANTIDADE:</Text>
          <TextInput style={Styles.input} placeholder="Digite quantidade" />
        </View>
        <View style={Styles.containerCheckBox}>
          <CheckBox
            title="Adicionar"
            //checked={this.state.checked}
          />
          <CheckBox
            title="Diminuir"
            //checked={this.state.checked}
          />
        </View>
        <View style={Styles.containerBotao}>
          <TouchableOpacity
            style={Styles.botao}
            //onPress={ () => {this.props.navigation.navigate('Main')} }
          >
            <Text style={Styles.textoBotao}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
