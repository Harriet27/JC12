import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const WelcomeIcon = () => {
  return (
    <View>
      <Icon type="feather" size={100} name="codepen" color="skyblue" />
      <Text style={styles.textLogo}>Project</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLogo: {
    textAlign: 'center',
    fontSize: 30,
    color: 'gray',
  },
});

export default WelcomeIcon;
