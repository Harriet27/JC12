import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Drawer from './Drawer';
import One from '../Screens/1';
import Two from '../Screens/2';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="One"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'One') {
            iconName = 'ac unit';
          } else if (route.name === 'Two') {
            iconName = '3d-rotation';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Drawer" component={Drawer} />
      <Tab.Screen name="One" component={One} />
      <Tab.Screen name="Two" component={Two} />
    </Tab.Navigator>
  );
};
