import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={style.textStyle}>Image Screen - Home</Text>
      <ImageDetail
        title="beach"
        imageSource={require('../../assets/beach.jpg')}
        score={9}
      />
      <ImageDetail
        title="forest"
        imageSource={require('../../assets/forest.jpg')}
        score={3}
      />
      <ImageDetail
        title="mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={7}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 50
  }
});

export default ImageScreen;
