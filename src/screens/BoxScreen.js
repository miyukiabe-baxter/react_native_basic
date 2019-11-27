import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text>
      </View>
      <View style={styles.viewStylV2}>
        <Text style={styles.textOneStyleV2}>Child 1</Text>
        <Text style={styles.textTwoStyleV2}>Child 2</Text>
        <Text style={styles.textThreeStyleV2}>Child 3</Text>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 30,
    //alignItems: 'flex-end',
    //height: 200,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    //alignItems: 'center'
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    //flex: 1
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    //flex: 1,
    //alignSelf: 'flex-end',
    // position: 'absolute',
    //fontSize: 30,
    // right: 40,
    ...StyleSheet.absoluteFillObject
    //below is the config textTwo takes up entire page. ...StyleSheet.absolute .....are some as below 5 lines.
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'green',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    //flex: 2
  },
  viewStylV2: {
    borderWidth: 5,
    borderColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    height: 100
    //flex: 1
  },
  textOneStyleV2: {
    borderWidth: 3,
    borderColor: 'red',
    //flex: 1,
    height: 50,
    width: 50,
    backgroundColor: 'pink'
  },
  textTwoStyleV2: {
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    backgroundColor: 'lightblue'
  },
  textThreeStyleV2: {
    borderWidth: 3,
    borderColor: 'green',
    height: 50,
    width: 50,
    backgroundColor: 'yellow'
  }
})

export default BoxScreen;