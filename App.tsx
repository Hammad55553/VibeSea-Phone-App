/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PasswordChanged from './screens/authentication/passwordchanged';
import VerifyForgotPasswordCode from './screens/authentication/verifyforgotpasswordcode';
import ResetPassword from './screens/authentication/resetpassword';
import ForgotPassword from './screens/authentication/forgotpassword';
import Signup from './screens/authentication/signup';
import Login from './screens/authentication/login';
import {Provider} from 'react-redux';
import store from './redux/store';
import Detailedpage from './screens/view_post/detailedpage';
import Security from './screens/security/security';


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen/Security">
          <Stack.Screen
            name="Auth/PasswordChanged"
            component={PasswordChanged}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth/VerifyForgotPasswordCode"
            component={VerifyForgotPasswordCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth/ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth/ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth/Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth/Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen/Detailedpage"
            component={Detailedpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
          name='Screen/Security'
          component={Security}
          options={{headerShown: false}}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
   
   
  );
}

export default App;
