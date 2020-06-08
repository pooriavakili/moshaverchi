import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/page/SignUp';
import Login from './src/page/Login';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import MyStack from './src/screen/MyStack';
import {Provider} from 'react-redux';
import store from './src/component/store/store';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    </Provider>
  );
}
