import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const List = ({text, handleDelete}) => {
  //props.text && props.handleDelete
  return (
    <View style={styles.listItems}>
      <Text>{text}</Text>
      <TouchableWithoutFeedback onPress={handleDelete}>
        <Text>x</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 10,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default List;
