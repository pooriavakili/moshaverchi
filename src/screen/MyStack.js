import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../page/SignUp';
import Login from '../page/Login';

import React from 'react'
const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="signup"
    headerMode="none"
    >
      <Stack.Screen
        name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login}

      />
    </Stack.Navigator>
  );
}
