import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import client from '../../../services/apollo';
import Styles from '../../../styles/stylesQueryEvento';
import QueryEvento from '../../../components/queryEvento';
import MutationProduto from '../../../components/mutationPrduto';

export default class CadProduto extends Component {
  static navigationOptions = {
    title: 'CADPRODUTO',
  };
  constructor(props) {
    super(props);
    this.state = {Atualiza: true};
  }

  componentDidMount() {
    setTimeout(() => this.setState({Atualiza: !this.state.Atualiza}), 5000);
    var timer = setInterval(
      () => this.setState({Atualiza: !this.state.Atualiza}),
      5000,
    );
  }

  render() {
    //console.log(this.state.Atualiza);
    return (
      <ApolloProvider client={client}>
        <ScrollView style={Styles.containerScroll}>
          <View style={Styles.containerTexto1}>
            <Text style={Styles.texto}>PRODUTO:</Text>
            <QueryEvento />
          </View>

          <View style={Styles.container}>
            <MutationProduto />
          </View>
        </ScrollView>
      </ApolloProvider>
    );
  }
}
