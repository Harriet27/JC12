import React from 'react';
import {View, Button, FlatList} from 'react-native';
import faker from 'faker';

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        keyExtractor={({}, index) => index.toString()}
        data={Array.from(Array(20), () => faker.commerce.product())}
        renderItem={({item}) => (
          <Button
            title={item}
            onPress={() => navigation.navigate('Detail', {name: item})}
          />
        )}
      />
    </View>
  );
};

export default Home;
