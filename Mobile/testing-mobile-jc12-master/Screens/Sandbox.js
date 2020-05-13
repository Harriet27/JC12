import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const Sandbox = () => {
  // console.log(Platform.OS);
  // console.log(Platform.Version);
  // console.log(Platform.isPad);
  // console.log(Platform.isTV);
  // console.log(Platform.isTVOS);
  // console.log(Dimensions.get('screen'));

  const [orientation, setOrientation] = useState('portait');

  const isPortrait = () => {
    return deviceHeight > deviceWidth;
  };

  Dimensions.addEventListener('change', () => {
    isPortrait() ? setOrientation('portrait') : setOrientation('landscape');
    if (orientation === 'portrait') {
      console.log('wah ganti portrait');
    } else {
      console.log('wah ganti landscape');
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Sandboxx</Text>
      </View>
      <View style={styles.contentBottom}>
        <Text>Sandboxx</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : 'red',
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    height: 200,
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
  content: {
    backgroundColor: 'gold',
    height: deviceHeight * 0.4,
    width: deviceWidth * 0.5,
    // flex: 1, // 1/2
  },
  contentBottom: {
    backgroundColor: 'skyblue',
    // flex: 1, // 1/2
  },
});

export default Sandbox;
