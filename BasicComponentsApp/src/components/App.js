import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../components/screens/HomeScreen';
import ComponentsScreen from '../components/screens/ComponentsScreen';
import FlatListScreen from '../components/screens/FlatListScreen';
import ImageScreen from '../components/screens/ImageScreen';
import CounterUseStateScreen from '../components/screens/CounterUseStateScreen';
import CounterUseReducerScreen from '../components/screens/CounterUseReducerScreen';
import ColorScreen from '../components/screens/ColorScreen';
import SquareUseStateScreen from '../components/screens/SquareUseStateScreen';
import SquareUseReducerScreen from '../components/screens/SquareUseReducerScreen';
import BoxScreen from '../components/screens/BoxScreen';
import LoginScreen from '../components/screens/LoginScreen';

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
        <Stack.Screen
          name="CounterUseReducer"
          component={CounterUseReducerScreen}
        />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="SquareUseState" component={SquareUseStateScreen} />
        <Stack.Screen
          name="SquareUseReducer"
          component={SquareUseReducerScreen}
        />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
