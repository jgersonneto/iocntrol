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

  constructor(props) {
    super(props);
    this.state = {Evento: ''};
  }

  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.containerTexto}>
          <Text style={Styles.texto}>NOME DO EVENTO:</Text>
          <TextInput
            style={Styles.input}
            placeholder="Digite o produto"
            onChange={text => {
              this.setState({Evento: text});
            }}
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
