import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Center from '../Support/Helper/Center';
import {Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../Redux/Actions/authActions';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

const LogOutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutAction());
  };
  return (
    <Center>
      <Button title="Logout" onPress={handleLogout} />
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
        component={ProfileStack}
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
