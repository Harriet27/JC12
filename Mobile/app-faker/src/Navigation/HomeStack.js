import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Detail, Confirmation} from '../Screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
};

export default HomeStack;
