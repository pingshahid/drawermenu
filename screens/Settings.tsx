import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DrawerSceneWrapper from '../DrawerSceneWrapper';


const Settings = ({ navigation }: any) => {
  const { openDrawer } = navigation;
  return (
    <DrawerSceneWrapper>
      <View style={styles.Container}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../../DrawerMenu/assets/menu.png')} />
        </TouchableOpacity>

        <Text style={styles.txt}> Settings Screen </Text>
      </View>
    </DrawerSceneWrapper>
  );
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50e339',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default Settings;
