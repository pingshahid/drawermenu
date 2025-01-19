import {
  StyleSheet,
} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const DrawerSceneWrapper = ({children}: any) => {
  const progress = useDrawerProgress();
  console.log(progress.value);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {
        rotateZ: `${interpolate(progress.value, [0, 1], [0,  -20], 'clamp')}deg`,
      },

      {
        translateX: interpolate(progress.value, [0, 1], [0, -100], 'clamp'),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
