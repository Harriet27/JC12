import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CommonActions, TabActions} from '@react-navigation/native';
import Center from '../Support/Helpers/Center';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../Redux/Actions';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

const LogoutScreen = ({navigation: {dispatch}}) => {
  const dispatchAction = useDispatch();
  const handleLogout = () => {
    dispatch(TabActions.jumpTo('Feed'));
    dispatchAction(LogoutAction());
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
      initialRouteName="ProfileFeed"
      drawerType="slide"
      drawerPosition="right">
      <Drawer.Screen
        name="ProfileFeed"
        component={ProfileStack}
        options={{title: 'Profile'}}
      />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
