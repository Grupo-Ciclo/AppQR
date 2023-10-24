import React from 'react';

import Scanner from './src/screens/Scanner';
import Home from './src/screens/Home';
import Lixeira from './src/screens/Lixeira';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator>

      <Stack.Screen name ="Home" component={Home}/> 
      <Stack.Screen name ="Scanner" component={Scanner}/> 
      <Stack.Screen name ="Lixeira" component={Lixeira}/>
    </Stack.Navigator>
  );
}

export default () =>{
  return(
    <NavigationContainer>
       <App></App>
    </NavigationContainer>
  )
}