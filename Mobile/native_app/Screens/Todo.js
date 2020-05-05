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
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const Todo = () => {
  const [data, setData] = useState([
    {todo: 'Belajar', key: 1},
    {todo: 'Makan', key: 2},
    {todo: 'Tidur', key: 3},
  ]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    setData(prevState => {
      return [...prevState, {todo: text, key: Math.random()}];
    });
    setText('');
  };

  const handleDelete = key => {
    console.log(key);
    setData(prevState => {
      return prevState.filter(val => val.key !== key);
    });
  };

  const renderData = () => {
    return data.map(val => {
      return (
        <TouchableOpacity key={val.key} onPress={() => handleDelete(val.key)}>
          <View>
            <Text style={styles.list}>{val.todo}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addInput}>
        <TextInput
          onChangeText={e => setText(e)}
          placeholder="Input Text Here"
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
              <View>
                <Text style={styles.list}>{item.todo}</Text>
                {/* <TouchableWithoutFeedback onPress={() => handleDelete(item.key)}>
                    <Text>x</Text>
                <TouchableWithoutFeedback/> */}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <ScrollView>{renderData()}</ScrollView> */}
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
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 10,
    color: 'black',
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default Todo;
