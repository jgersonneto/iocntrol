import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  containerTexto: {
    flex: 1,
    width: 300,
    height: 40,
    marginTop: 30,
    marginStart: 10,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    //alignContent: 'flex-start',
  },
  containerBotao: {
    flex: 1,
    height: 60,
    marginStart: 5,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textoBotao: {
    color: '#FFF',
  },
  texto: {
    color: '#0962F1',
    textAlign: 'left',
    marginTop: 5,
  },
  input: {
    padding: 1,
    width: 300,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  botao: {
    width: 300,
    height: 42,
    marginStart: 5,
    backgroundColor: '#3498db',
    marginTop: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default styles;
