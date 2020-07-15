import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {primary_colour} from '../Helper/Zomato';
// import {StackActions} from '@react-navigation/native';

const Settings = ({navigation: {navigate, dispatch}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>Settings</Text>
        <Image source={require('../Images/default.png')} style={styles.image} />
        <Button
          title="Sign In"
          onPress={() => navigate('Two')}
          // onPress={() => dispatch(StackActions.replace('two'))}
          color={primary_colour}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  color: {
    backgroundColor: primary_colour,
  },
});

export default Settings;
