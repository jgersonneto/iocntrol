import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {gql} from 'apollo-boost';
import {useMutation} from 'react-apollo';
import Styles from '../styles/stylesMutationEvento';

const ADD_PRODUTO = gql`
  mutation AddProduto($NOME_P: String, $QTD: int) {
    insert_produto($NOME_P: $$NOME_P, QTD: $QTD) {
      returning {
        ID
        NOME_P
        QTD
      }
    }
  }
`;

function Add() {
  let [NOME_P, setNOME_P] = useState('');
  let [QTD, setQTD] = useState('');
  let [AddProduto, {data, error}] = useMutation(ADD_PRODUTO);

  const handleFinalize = () => {
    AddProduto({
      variables: {
        NOME_P: NOME_P,
        QTD: QTD,
      },
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerTexto}>
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={produto => setNOME_P(produto)}
        />
      </View>
      <View style={Styles.containerTexto}>
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={qtd => setQTD(qtd)}
        />
      </View>
      <View style={Styles.containerBotao}>
        <TouchableOpacity style={Styles.botao} onPress={handleFinalize}>
          <Text style={Styles.textoBotao}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Add;
