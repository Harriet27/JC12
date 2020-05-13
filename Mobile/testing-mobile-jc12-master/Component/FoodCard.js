import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FoodCard = ({image, description}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 250,
    width: 250,
    marginVertical: 10,
  },
  cardImage: {
    height: 150,
    width: 150,
  },
  text: {
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default FoodCard;
