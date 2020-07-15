import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Latihan from '../Screens/Latihan';
// import Settings from '../Screens/Settings';
import Stack from './Stack';
// import {primary_colour} from '../Helper/Zomato';
import One from '../Screens/1';
import ProfileStack from './ProfileStack';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.background}
      // drawerPosition="right"
      // drawerType="slide"
    >
      {/* <Drawer.Screen name="Home" component={Latihan} /> */}
      <Drawer.Screen name="Home" component={Stack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="One" component={One} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
});
