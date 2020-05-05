import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FoodCard = ({image, desciption}) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
      <Text>{desciption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  cardImage: {
    height: 100,
    width: 100,
  },
});

export default FoodCard;
