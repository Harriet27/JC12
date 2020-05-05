import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primary_colour} from '../Helper/Zomato';

const HeaderZomato = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Zomato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: primary_colour,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HeaderZomato;
