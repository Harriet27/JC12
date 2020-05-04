import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Sandbox</Text>
      </View>
      <View style={styles.contentBottom}>
        <Text>Sandbox</Text>
      </View>
      <View style={styles.content}>
        <Text>Sandbox</Text>
      </View>
      <View style={styles.contentBottom}>
        <Text>Sandbox</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  content: {
    backgroundColor: 'gold',
    flex: 2,
  },
  contentBottom: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
});

export default Sandbox;
