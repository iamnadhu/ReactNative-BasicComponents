import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Components:</Text>
      <Button
        title="Press Button"
        onPress={() => console.warn('Button Pressed!')}
      />
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={() => console.warn('Touchable Opacity Pressed!')}>
        <Text style={styles.text}> Press Touchable Opacity 1 </Text>
        <Text style={styles.text}> Press Touchable Opacity 2 </Text>
      </TouchableOpacity>
      <Button
        title="Components Screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Flat List Screen"
        onPress={() => navigation.push('FlatList')}
      />
      <Button title="Image Screen" onPress={() => navigation.push('Image')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    paddingLeft: 3,
    color: 'white',
  },
  touchableOpacityStyle: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 20,
  },
});

export default HomeScreen;
