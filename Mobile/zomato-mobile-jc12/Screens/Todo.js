import React, {useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import List from '../Component/List';
import AddList from '../Component/AddList';

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

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <List
              text={item.todo}
              handleDelete={() => handleDelete(item.key)}
            />
          )}
        />
      </View>
      <View>
        <AddList
          text={text}
          onChangeText={e => setText(e)}
          handleAdd={handleAdd}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default Todo;
