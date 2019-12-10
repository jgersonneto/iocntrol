import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import Login from './pages/login/login';
import Routes2 from './pages/login/routes2';

const MainNavigator = createSwitchNavigator(
  {
    Login: Login,
    Routes: Routes2,
  },
  {
    initialRouteName: 'Login',
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

const App = createAppContainer(MainNavigator);

export default App;
