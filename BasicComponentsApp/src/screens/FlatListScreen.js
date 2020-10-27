import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const FlatListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 21},
    {name: 'Friend #2', age: 22},
    {name: 'Friend #3', age: 23},
    {name: 'Friend #4', age: 24},
    {name: 'Friend #5', age: 25},
    {name: 'Friend #6', age: 26},
    {name: 'Friend #7', age: 27},
    {name: 'Friend #8', age: 28},
    {name: 'Friend #9', age: 29},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vertical Flat List</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
          return (
            <Text style={styles.textSub}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
      <Text style={styles.text}>Horizontal Flat List</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
          return <Text style={styles.textSub}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
  textSub: {
    fontSize: 20,
    margin: 15,
  },
});

export default FlatListScreen;
