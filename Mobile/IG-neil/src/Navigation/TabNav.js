import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {FeedTab, PostTab} from '../Screen';
import ProfileDrawer from './ProfileDrawer';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Post') {
            iconName = 'add-box';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle';
          }
          return (
            <Icon name={iconName} size={28} color={color} type="material" />
          );
        },
      })}>
      <Tab.Screen name="Feed" component={FeedTab} />
      <Tab.Screen name="Post" component={PostTab} />
      <Tab.Screen name="Profile" component={ProfileDrawer} />
    </Tab.Navigator>
  );
};

export default TabNav;
