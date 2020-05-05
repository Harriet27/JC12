import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {ZOMATO_KEY, ZOMATO_URL} from '../Helper/Zomato';
import HeaderZomato from '../Component/HeaderZomato';
import ListCategory from '../Component/ListCategory';
import FoodCard from '../Component/FoodCard';

const Latihan = () => {
  const [categories, setCategories] = useState([]);
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetchCategories();
    fetchMeal();
  }, []);

  let options = {
    headers: {
      'user-key': ZOMATO_KEY,
    },
  };
  const fetchCategories = async () => {
    try {
      let res = await axios.get(`${ZOMATO_URL}/categories`, options);
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchMeal = async () => {
    try {
      let res = await axios.get(`${ZOMATO_URL}/collections?city_id=1`, options);
      console.log(res.data);
      setMeal(res.data.collections);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderZomato />
      <View style={styles.categoryContainer}>
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal={true}
          data={categories}
          renderItem={({item}) => (
            <ListCategory
              key={item.categories.id}
              name={item.categories.name}
            />
          )}
        />
      </View>
      <View style={styles.randomContainer}>
        <FlatList
          data={meal}
          renderItem={({item}) => (
            <FoodCard
              image={item.collection.image_url}
              desciption={item.collection.description}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    alignItems: 'center',
  },
  categoryContainer: {
    flex: 1,
    paddingTop: 10,
  },
  randomContainer: {
    flex: 2,
  },
});

export default Latihan;
