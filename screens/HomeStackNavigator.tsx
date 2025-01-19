import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
