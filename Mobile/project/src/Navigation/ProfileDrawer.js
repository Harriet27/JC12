import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileFeed} from '../Screen';
import Center from '../Support/Helper/Center';
import {Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../Redux/Actions/authActions';

const Drawer = createDrawerNavigator();

const LogOutScreen = () => {
  const dispatch = useDispatch();
  return (
    <Center>
      <Button title="Logout" onPress={() => dispatch(LogoutAction())} />
    </Center>
  );
};

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile Feed"
      drawerPosition="right"
      drawerType="slide"
      drawerStyle={s.drawerStyle}>
      <Drawer.Screen
        name="Profile Feed"
        component={ProfileFeed}
        options={{title: 'Profile'}}
      />
      <Drawer.Screen name="Log Out" component={LogOutScreen} />
    </Drawer.Navigator>
  );
};

const s = StyleSheet.create({
  drawerStyle: {
    borderWidth: 0,
  },
});

export default ProfileDrawer;
