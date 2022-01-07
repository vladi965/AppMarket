import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator()

import Home from './screens/Home'
import Perfil from './screens/Perfil'
import Registro from './screens/Registro'
import Login from './screens/Login'
import ConteoHora from './screens/ConteoHora'
import Descanso from './screens/Descanso'
import HoraFinal from './screens/HoraFinal';

function MyStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#034DA2',
      },
      headerTintColor: '#FFD321',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >   
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Marcaje" component={ConteoHora} />
      <Stack.Screen name="Descanso" component={Descanso} />
      <Stack.Screen name="Marcaje!" component={HoraFinal} />
      <Stack.Screen name="Perfil" component={Perfil} />
      
      
    </Stack.Navigator>
  )
}

export default function App() {
  return (
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });
