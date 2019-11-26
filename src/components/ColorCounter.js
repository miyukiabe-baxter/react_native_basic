import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const ColorCounter = (props) => {

  const { colorType, onIncrease, onDecrease } = props

  return (
    <View>
      <Text> {colorType} </Text>
      <Button
        title={`Increase ${colorType}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${colorType}`}
        onPress={() => onDecrease()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 90
  }
})

export default ColorCounter;