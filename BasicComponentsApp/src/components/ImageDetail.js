import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    height: 150,
    width: 260,
    borderRadius: 10,
  },
});

export default ImageDetail;
