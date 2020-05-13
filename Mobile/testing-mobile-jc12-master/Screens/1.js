import React from 'react';
import {View, Text, Button} from 'react-native';

const One = ({navigation}) => {
  // navigation.goBack()
  return (
    <View>
      <Text>1.js</Text>
      <Button
        title="to 2.js"
        onPress={() => {
          navigation.navigate('Two', {
            name: 'aldrich',
            data: [1, 2, 3],
          });
        }}
      />
    </View>
  );
};

export default One;
