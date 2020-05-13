import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import One from '../Screens/1';
// import Two from '../Screens/2';
import Latihan from '../Screens/Latihan';
// import Drawer from './Drawer';
import CategoryDetail from '../Screens/CategoryDetail';
import RestaurantDetail from '../Screens/RestaurantDetail';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      // headerMode="none"
      initialRouteName="HomeDrawer"
      screenOptions={{
        // headerShown: false
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
      {/* <Stack.Screen name="One" component={One} /> */}
      {/* <Stack.Screen name="Two" component={Two} /> */}
      {/* <Stack.Screen name="HomeDrawer" component={Drawer} /> */}
      <Stack.Screen name="HomeDrawer" component={Latihan} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};
