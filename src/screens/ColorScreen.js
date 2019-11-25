import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Text>Let's Display Some Color!!!</Text>
      <Button
        onPress={() => {
          setColor([...colors, randomRgb()]);
          console.log(colors);
        }}
        title="Add More color"
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
});

export default ColorScreen;
