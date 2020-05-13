import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../Screen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="MainScreen" /> */}
    </Stack.Navigator>
  );
};

export default MainNavigation;
