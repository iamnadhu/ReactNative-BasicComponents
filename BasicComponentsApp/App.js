import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterUseStateScreen from './src/screens/CounterUseStateScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'Basic Components',
          headerStyle: {
            backgroundColor: '#FF0000',
            height: 120,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen
          name="CounterUseState"
          component={CounterUseStateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
