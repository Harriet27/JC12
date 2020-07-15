import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../Screens/Settings';
import Two from '../Screens/2';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Two" component={Two} />
    </Stack.Navigator>
  );
};
