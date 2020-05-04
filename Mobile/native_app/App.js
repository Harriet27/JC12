/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
.*/

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([
    {todo: 'Belajar', key: 1},
    {todo: 'Makan', key: 2},
    {todo: 'Tidur', key: 3},
  ]);

  const handleAdd = () => {
    setData(prevState => {
      // return [{todo: text, key: Math.random()}, ...prevState]; // muncul atas
      return [...prevState, {todo: text, key: Math.random()}]; // muncul bawah
    });
    setText('');
  };

  const handleDelete = key => {
    setData(prevState => {
      return prevState.filter(val => val.key !== key);
    });
  };

  const renderData = () => {
    return data.map(val => {
      return (
        <TouchableOpacity key={val.key} onPress={() => handleDelete(val.key)}>
          <Text key={val.key} style={styles.list}>
            {val.todo}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addInput}>
        <TextInput
          placeholder="Input Text here"
          onChangeText={e => setText(e)}
          value={text}
        />
        <Button title="Click Me" onPress={handleAdd} />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleDelete(item.key)}>
              <Text key={item.key} style={styles.list}>
                {item.todo}
              </Text>
            </TouchableOpacity>
          )}
        />
        {/* <ScrollView>{renderData()}</ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addInput: {
    padding: 20,
  },
  list: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 10,
    color: 'white',
  },
});

export default App;
