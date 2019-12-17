import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {gql} from 'apollo-boost';
import {useMutation} from 'react-apollo';
import Styles from '../styles/stylesMutationEvento';

const ADD_MATEVENTO = gql`
  mutation AddIocontrol(
    $INQTD: int
    $OUTQTD: int
    $R_NOME_E: String
    $R_NOME_P: String
  ) {
    insert_ioevento(
      INQTD: $INQTD
      OUTQTD: $OUTQTD
      R_NOME_E: $R_NOME_E
      R_NOME_P: $R_NOME_P
    ) {
      returning {
        ID
        INQTD
        OUTQTD
        R_NOME_E
        R_NOME_P
      }
    }
  }
`;

function Add() {
  let [INQTD, setINQTD] = useState('');
  let [OUTQTD, setOUTQTD] = useState(0);
  let [R_NOME_E, setR_NOME_E] = useState('');
  let [R_NOME_P, setR_NOME_P] = useState('');
  let [AddIOEvento, {data, error}] = useMutation(ADD_MATEVENTO);

  const handleFinalize = () => {
    AddIOEvento({
      variables: {
        INQTD: INQTD,
        OUTQTD: OUTQTD,
        R_NOME_E: R_NOME_E,
        R_NOME_P: R_NOME_P,
      },
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerTexto}>
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={inqtd => setINQTD(inqtd)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={outqtd => setOUTQTD(0)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={nomeev => setR_NOME_E(nomeev)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Digite o nome do Evento"
          onChangeText={nomep => setR_NOME_P(nomep)}
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
