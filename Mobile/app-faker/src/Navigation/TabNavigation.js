import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Center from '../Helper/Center';
import {Text, FlatList, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyCartAction} from '../Reducer/Cart';

const Tab = createBottomTabNavigator();

const CartTab = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.CartReducer.cart);

  return (
    <React.Fragment>
      {cart.length !== 0 ? (
        <View>
          <FlatList
            data={cart}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={({}, index) => index.toString()}
          />
          <Button
            title="Purchase"
            onPress={() => dispatch(EmptyCartAction())}
          />
        </View>
      ) : (
        <Center>
          <Text>Cart is Empty</Text>
        </Center>
      )}
    </React.Fragment>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartTab} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
