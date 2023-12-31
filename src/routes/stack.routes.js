import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/* import Login from '../screens/Login'; */
//import { Splash } from '../lotties/Splash';
/* import AuthRoutes from './tab.routes'; */
import Usuario from '../screens/Lixeira'
/* import NovoUsuario from '../screens/NovoUsuario'; */


const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>            
   
            {/* <Stack.Screen name="Usuario" component={Usuario} />  */}
            <Stack.Screen name="Usuario" component={Usuario} />
          
        </Stack.Navigator>
    )
}

function AppRoutes() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }
export default AppRoutes;