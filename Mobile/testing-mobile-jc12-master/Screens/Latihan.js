import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {ZOMATO_KEY, ZOMATO_URL} from '../Helper/Zomato';
import HeaderZomato from '../Component/HeaderZomato';
import ListCategory from '../Component/ListCategory';
import FoodCard from '../Component/FoodCard';

const Latihan = ({navigation: {navigate}}) => {
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
      <HeaderZomato title="Zomato" />
      <View style={styles.categoryContainer}>
        <FlatList
          keyExtractor={item => item.categories.id.toString()}
          contentContainerStyle={styles.listStyle}
          horizontal={true}
          data={categories}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigate('CategoryDetail', {
                  name: item.categories.name,
                  id: item.categories.id,
                })
              }>
              <ListCategory key={index} name={item.categories.name} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.randomContainer}>
        <FlatList
          keyExtractor={item => item.collection.id}
          contentContainerStyle={styles.listStyle}
          onRefresh={() => console.log('refreshing')}
          data={meal}
          refreshing={false}
          renderItem={({item}) => (
            <FoodCard
              image={item.collection.image_url}
              description={item.collection.description}
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
