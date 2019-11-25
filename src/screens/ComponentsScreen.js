import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = ['yoyoyo', 'array1'];
  const user_name = 'Billy Baxter';

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react Native!</Text>
      <Text style={styles.myname}>My name is {user_name}</Text>
      <Text style={styles.textStyle}>{greeting[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  myname: {
    fontSize: 20
  }
});

export default ComponentsScreen;
