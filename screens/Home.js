import {View,Button, StyleSheet} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
          <Button title="Scanear" onPress={()=> navigation.navigate('Scanner')}></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})