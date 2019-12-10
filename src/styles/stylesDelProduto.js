import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignContent: 'center',
  },
  containerTexto: {
    flex: 1,
    width: 300,
    height: 230,
    marginTop: 6,
    marginStart: 10,
    backgroundColor: '#2c3e50',
    justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    //alignContent: 'flex-start',
  },
  containerCheckBox: {
    flex: 1,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  containerBotao: {
    flex: 1,
    height: 60,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  textoBotao: {
    color: '#FFF',
  },
  texto: {
    color: '#FFF',
    textAlign: 'left',
    marginTop: 15,
  },
  input: {
    marginTop: 6,
    padding: 1,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 150,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    marginStart: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default styles;
