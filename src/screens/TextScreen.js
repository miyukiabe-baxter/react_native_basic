import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>This is Text Screen page</Text>
      <Text>Input Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(inputText) => {
          setPassword(inputText)
        }}
      />
      {password.length < 5 ? <Text>Password has to be longer than 5 charactors</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;