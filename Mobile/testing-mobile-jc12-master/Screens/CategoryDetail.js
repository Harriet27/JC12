import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import {ZOMATO_URL, ZOMATO_KEY} from '../Helper/Zomato';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import HeaderZomato from '../Component/HeaderZomato';
import FoodCard from '../Component/FoodCard';

const CategoryDetail = ({route: {params}, navigation: {navigate}}) => {
  useEffect(() => {
    fetchData();
  }, []);

  let [data, setData] = useState([]);

  let fetchData = async () => {
    try {
      let response = await Axios.get(
        `${ZOMATO_URL}/search?count=3$category=${params.id}`,
        {
          headers: {
            'user-key': ZOMATO_KEY,
          },
        },
      );
      console.log(response.data.restaurants);
      setData(response.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <HeaderZomato title={params.name} />
      <Text>{params.name}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigate('RestaurantDetail', {
                data: item,
              })
            }>
            <FoodCard
              description={item.restaurant.name}
              image={item.restaurant.featured_image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryDetail;
