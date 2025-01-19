import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DrawerSceneWrapper from '../DrawerSceneWrapper';



const Home = ({ navigation }: any) => {
  const { openDrawer } = navigation;
  return (
    <DrawerSceneWrapper>
      <View style={styles.Container}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../../DrawerMenu/assets/menu.png')} />
        </TouchableOpacity>

        <Text style={styles.txt}> Home Screen </Text>
        <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
        <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />

      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dffc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});


export default Home;