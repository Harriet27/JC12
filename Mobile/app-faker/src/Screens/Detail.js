import React from 'react';
import {Text, Button} from 'react-native';
import Center from '../Helper/Center';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCartAction} from '../Reducer/Cart';

const Detail = ({navigation, route}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.CartReducer.cart);

  const handleAdd = () => {
    dispatch(AddToCartAction([...cart, route.params.name]));
    navigation.navigate('Confirmation');
  };

  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button title="Confirm" onPress={handleAdd} />
    </Center>
  );
};

export default Detail;
