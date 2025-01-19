import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;
