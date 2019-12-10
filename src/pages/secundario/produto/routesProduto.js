import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Produto from '../../principal/produto';
import CadProduto from './cadProduto';
import DelProduto from './delProduto';
import AltProduto from './altProduto';

const ProdutoNavigator = createStackNavigator(
  {
    Produto: {
      screen: Produto,
      navigationOptions: {
        tabBarLabel: 'PRODUTO',
      },
    },
    CadProduto: {
      screen: CadProduto,
      navigationOptions: {
        tabBarLabel: 'PRODUTO',
      },
    },
    DelProduto: DelProduto,
    AltProduto: AltProduto,
  },
  {
    initialRouteName: 'Produto',
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

const App = createAppContainer(ProdutoNavigator);

export default App;
