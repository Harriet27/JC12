import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {primary_colour} from '../Helper/Zomato';

const ListCategory = ({name}) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 10,
    height: 150,
    width: 150,
    backgroundColor: primary_colour,
    justifyContent: 'center',
    borderRadius: 12,
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default ListCategory;
