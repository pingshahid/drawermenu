import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createDrawerNavigator, } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import About from './screens/About';
import Settings from './screens/Settings';
import TabNavigator from './screens/TabNavigator';

const Drawer = createDrawerNavigator();


interface DrawerIconProps {
  focused: boolean;
  size: number;
}
const drawerIcon = ({ focused, size }: DrawerIconProps, name: string): JSX.Element => {
  return (
    <Icon
      name={name}
      size={size}
      color={focused ? Colors.active : Colors.inactive}
    />
  );
};

const DrawerNavigator = () => {


  return (

    <NavigationContainer>

      <Drawer.Navigator
            screenOptions={{
              drawerType: 'back',
              headerShown: false,
              drawerActiveBackgroundColor: Colors.transparent,
              drawerInactiveBackgroundColor: Colors.transparent,
              drawerActiveTintColor: Colors.active,
              drawerInactiveTintColor: Colors.inactive,
              overlayColor: Colors.transparent,
              drawerStyle: {
                backgroundColor: Colors.bg,
                width: '50%',
                zIndex: 0, // Set the drawer behind content
              },
            }}

        >
        <Drawer.Screen name="Home" component={TabNavigator} 
                options={{
                  drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
        />
        <Drawer.Screen name="About" component={About} 
                options={{
                  drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
        />
        <Drawer.Screen name="Settings" component={Settings} 
                options={{
                  drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
        />
      </Drawer.Navigator>

    </NavigationContainer>


  );
};


export default DrawerNavigator;
const Colors = {
  bg: '#009688',
  active: '#fff',
  inactive: '#eee',
  transparent: 'transparent',
};
