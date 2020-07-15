import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddList = ({text, onChangeText, handleAdd}) => {
  return (
    <View style={styles.addInput}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Input Text Here"
        value={text}
        style={styles.inputBox}
      />
      <Button title="Click Me" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  addInput: {
    padding: 20,
  },
  inputBox: {
    marginBottom: 5,
    borderColor: '#333',
    backgroundColor: '#ddd',
    borderWidth: 2,
    padding: 10,
  },
});

export default AddList;
