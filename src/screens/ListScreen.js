import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  // renderItem's element will return element === {item: {name: Miyuki}, index: 0}
  //Therefore, if I wanna access to {name: Miyuki}, I can destructure as {item}
  const friends = [
    { name: 'Miyuki', key: '1', age: 29 },
    { name: 'Billy', key: '2', age: 23 },
    { name: 'Kochi', key: '3', age: 49 },
    { name: 'Momo', key: '4', age: 53 },
    { name: 'Ydasfdafdsddso', key: '5', age: 23 },
    { name: 'Test', key: '6', age: 21 },
    { name: 'sfsdadcsfcadfsds', key: '7', age: 49 },
    { name: 'dhaod', key: '8', age: 76 },
    { name: 'kydcdffaeeda', key: '9', age: 36 },
    { name: 'feafjwe', key: '10', age: 87 }
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={true}
      keyExtractor={friend => friend.key}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
