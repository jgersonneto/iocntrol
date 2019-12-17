import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {gql} from 'apollo-boost';
import {useMutation} from 'react-apollo';
import Styles from '../styles/stylesMutationEvento';

const ADD_EVENTO = gql`
  mutation AddEvento($NOME_E: String) {
    insert_evento(objects: {NOME_E: $NOME_E}) {
      returning {
        ID
        NOME_E
      }
    }
  }
`;

function Add() {
  let [NOME_E, setNOME_E] = useState('');
  let [AddEvento, {data, error}] = useMutation(ADD_EVENTO);

  const handleFinalize = () => {
    AddEvento({
      variables: {
        NOME_E: NOME_E,
      },
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerTexto}>
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={nome => setNOME_E(nome)}
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
