import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardPokemon from './components/CardPokemon';
import Buscar from './components/Buscar';
import Home from './pages/Home'
import {Ionicons} from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name='home-outline' size={size} color={color}/>
      )}}/>
      <Tab.Screen name='Buscar' component={Buscar} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name='search-outline' size={size} color={color}/>
      )}}/>
    </Tab.Navigator>
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
