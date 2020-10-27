import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Image Screen! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ImageScreen;
