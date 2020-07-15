import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import HeaderZomato from '../Component/HeaderZomato';
import {StackActions} from '@react-navigation/native';

const RestaurantDetail = ({route: {params}, navigation: {dispatch}}) => {
  let {restaurant} = params.data;
  console.log(restaurant.id);
  return (
    <View style={styles.container}>
      <HeaderZomato title={restaurant.name} />
      <View>
        <Image source={{uri: restaurant.featured_image}} style={styles.image} />
      </View>
      <Text>{restaurant.location.address}</Text>
      <Text>{restaurant.cuisines}</Text>
      <Text>{restaurant.average_cost_for_two}</Text>
      <Button
        // title="Pop To Top"
        // onPress={() => dispatch(StackActions.popToTop())}
        title="Pop 2"
        onPress={() => dispatch(StackActions.pop(2))} // argument utk stack diback brp kali
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
});

export default RestaurantDetail;
