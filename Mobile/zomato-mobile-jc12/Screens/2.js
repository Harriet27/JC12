import React from 'react';
import {View, /* Text, */ Button} from 'react-native';
// import {StackActions} from '@react-navigation/native';

const Two = ({navigation, route}) => {
  // navigation.goBack()
  console.log(route.params);
  return (
    <View>
      {/* <Text>2.js</Text> */}
      {/* <Text>{route.params.name}</Text> */}
      {/* <Text>{route.params.data}</Text> */}
      <Button title="to 1.js" onPress={() => navigation.navigate('One')} />
      <Button title="to Zomato" onPress={() => navigation.navigate('Home')} />
      {/* <Button
        title="to Zomato"
        onPress={() => navigation.dispatch(StackActions.replace('Settings'))}
      /> */}
    </View>
  );
};

export default Two;
