import { View, Button, StyleSheet, Pressable, Text, TouchableOpacity, VirtualizedList } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
    <View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Scanner')}>
        <Text style={styles.text}>Escanear</Text>
      </Pressable>

      {/*
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate ('Scanner')}>
          <Text style={styles.text}>Escanear</Text>
        </TouchableOpacity> */}
    </View>
    
    <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Lixeira')}>
          <Text style={styles.text}>Lixeira</Text>
        </Pressable>

        {/* 
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate ('Usuario')}>
            <Text style={styles.text}>Lixeira</Text>
          </TouchableOpacity> */}
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#40A858',
    width: 245,
    height: 70,
    borderRadius: 100
  },
  text: {
    color: 'white',
    fontSize: 40
  }
})