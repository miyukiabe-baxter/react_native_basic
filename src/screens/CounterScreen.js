import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Let's Count!!!</Text>
      <Button
        onPress={() => {
          console.log('increase button');
          setCounter(counter + 1);
        }}
        title="Increase"
      />
      <Button
        onPress={() => {
          console.log('decrease button');
          setCounter(counter - 1);
        }}
        title="Decrease"
      />
      <Text>Current Count is {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
});

export default CounterScreen;
