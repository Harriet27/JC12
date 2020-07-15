import React from 'react';
import {Text, Button} from 'react-native';
import Center from '../Helper/Center';

const Confirmation = ({navigation}) => {
  return (
    <Center>
      <Text>Thank You!</Text>
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
    </Center>
  );
};

export default Confirmation;
