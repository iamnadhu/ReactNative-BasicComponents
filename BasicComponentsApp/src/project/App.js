import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../project/screens/HomeScreen';
import DetailsScreen from '../project/screens/DetailsScreen';
import ExploreScreen from '../project/screens/ExploreScreen';
import ProfileScreen from '../project/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
          }}
        />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Explore" component={ExploreScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
