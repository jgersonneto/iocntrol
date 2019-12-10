import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Evento from '../../principal/evento';
import CadEvento from './CadEvento';
import EventoIO from './IOEvento';
//import AltEvento from './AltEvento';

const eventoNavigator = createStackNavigator(
  {
    Evento: {
      screen: Evento,
      navigationOptions: {
        tabBarLabel: 'EVENTO',
      },
    },
    CadEvento: {
      screen: CadEvento,
      navigationOptions: {
        tabBarLabel: 'CADEVENTO',
      },
    },
    EventoIO: EventoIO,
    //AltEvento: AltEvento,
  },
  {
    initialRouteName: 'Evento',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
  },
);

const App = createAppContainer(eventoNavigator);

export default App;
