import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DrawerSceneWrapper from '../DrawerSceneWrapper';

const About = ({ navigation }: any) => {
  const { openDrawer } = navigation;
  return (
    <DrawerSceneWrapper>
      <View style={styles.Container}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../../DrawerMenu/assets/menu.png')} />
        </TouchableOpacity>

        <Text style={styles.txt}> About Screen </Text>
      </View>
    </DrawerSceneWrapper>
  );
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e303fc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default About;