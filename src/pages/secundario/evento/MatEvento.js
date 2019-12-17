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
import Styles from '../../../styles/stylesIOEvento';
import QueryMatEvento from '../../../components/queryMatEvento';
import MutationMatEvento from '../../../components/mutationMatEvento';

export default class MatEvent extends Component {
  static navigationOptions = {
    title: 'EVENTO',
  };

  constructor(props) {
    super(props);
    this.state = {
      Atualiza: true,
      Nevento: String,
    };
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
            <Text style={Styles.texto}>MATERIAL DO EVENTO:</Text>
            <TextInput
              style={Styles.input}
              placeholder="Digite o nome do Evento"
              onChangeText={nevento => this.setState({Nevento: nevento})}
            />
            <QueryMatEvento nome={this.state.Nevento} />
          </View>

          <View style={Styles.container}>
            <MutationMatEvento />
          </View>
        </ScrollView>
      </ApolloProvider>
    );
  }
}
