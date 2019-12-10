import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Styles from '../../../styles/stylesCadProduto';

export default class CadProduto extends Component {
  static navigationOptions = {
    title: 'CADPRODUTO',
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
