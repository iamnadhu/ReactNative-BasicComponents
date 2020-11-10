import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to details screen...again"
        onPress={() => navigation.push('Details')}
      /> */}
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back to previous screen"
        onPress={() => navigation.goBack()}
      />
      {/* <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
