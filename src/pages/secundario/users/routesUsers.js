import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../../principal/main';
import CadUsers from './cadUsers';
import DelUsers from './delUsers';
import AltUsers from './altUsers';

const UserNavigator = createStackNavigator(
  {
    Users: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'USERS',
      },
    },
    CadUsers: CadUsers,
    DelUsers: DelUsers,
    AltUsers: AltUsers,
  },
  {
    initialRouteName: 'Users',
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

const App = createAppContainer(UserNavigator);

export default App;
