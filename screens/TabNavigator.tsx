import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactScreen from './ContactScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
