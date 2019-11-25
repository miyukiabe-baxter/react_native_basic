import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={style.imageStyle}>{title} Image</Text>
      <Text style={style.subtitle}>Image score - {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 25
  }
});

export default ImageDetail;
