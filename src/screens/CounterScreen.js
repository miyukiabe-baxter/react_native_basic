import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, currentCount: state.currentCount + 1 }
    case DECREASE_COUNT:
      return { ...state, currentCount: state.currentCount - 1 }
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { currentCount: 0 });

  return (
    <View>
      <Text>Let's Count!!!</Text>
      <Button
        onPress={() => {
          console.log('increase button');
          dispatch({ type: INCREASE_COUNT })
        }}
        title="Increase"
      />
      <Button
        onPress={() => {
          console.log('decrease button');
          dispatch({ type: DECREASE_COUNT })
        }}
        title="Decrease"
      />
      <Text>Current Count is {state.currentCount}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
});

export default CounterScreen;
