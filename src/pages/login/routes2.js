import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoutesUsers from '../secundario/users/routesUsers';
import RoutesProduto from '../secundario/produto/routesProduto';
import RoutesEvento from '../secundario/evento/eventoRoutes';

Icon.loadFont();

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Users: {
      screen: RoutesUsers,
      navigationOptions: {
        tabBarLabel: 'USERS',
      },
    },
    Produto: {
      screen: RoutesProduto,
      navigationOptions: {
        tabBarLabel: 'PRODUTO',
      },
    },
    Evento: {
      screen: RoutesEvento,
      navigationOptions: {
        tabBarLabel: 'EVENTO',
      },
    },
  },
  {
    //initialRouteName: 'Main',
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
