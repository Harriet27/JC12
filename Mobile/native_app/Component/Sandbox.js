import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';

const Sandbox = () => {
  // console.log(Platform.OS);
  // console.log(Platform.Version);
  // console.log(Platform.isPad);
  // console.log(Platform.isTV);
  // console.log(Platform.isTVOS);
  console.log(Dimensions.get('screen'));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Sandbox</Text>
      </View>
      <View style={styles.contentBottom}>
        <Text>Sandbox</Text>
      </View>
    </View>
  );
};

const [orientation, setOrientation] = useState('portrait');

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const isPortrait = () => {
  return deviceHeight > deviceWidth;
};

Dimensions.addEventListener('change', () => {
  isPortrait() ? setOrientation('portrait') : setOrientation('landscape');
  if (orientation = 'portrait') {
    console.log('portrait mode');
  } else {
    console.log('landscape mode');
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : 'red',
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    // justifyContent: 'center',
    flex: 1,
  },
  content: {
    backgroundColor: 'gold',
    height: deviceHeight * 0.4,
    width: deviceWidth * 0.5,
    // flex: 2,
  },
  contentBottom: {
    backgroundColor: 'skyblue',
    // flex: 1,
  },
});

export default Sandbox;
