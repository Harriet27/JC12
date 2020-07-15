import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileFeed} from '../Screen';
import EditProfile from '../Screen/EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ProfileHome" component={ProfileFeed} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
