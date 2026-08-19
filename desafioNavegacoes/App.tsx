import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardFilme from './components/CardFilme';
import { useEffect } from 'react';
import ListaFilmes from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Favoritos from './pages/Favoritos';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Perfil from './pages/Perfil';
import Infos from './components/Infos';

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    

    <NavigationContainer>

    <Tab.Navigator initialRouteName='Início'>
      <Tab.Screen name='Início' component={ListaFilmes} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name='home-outline' size={size} color={color}/>
      )}}/>
      <Tab.Screen name='Favoritos' component={Favoritos} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name='search-outline' size={size} color={color}/>
      )}}/>
        <Tab.Screen name='Perfil' component={Perfil} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name='body-outline' size={size} color={color}/>
      )}}/>
       < Tab.Screen name='Infos' component={Infos} options={{ tabBarStyle:{display: 'none'}, tabBarButton: () => null
      }}/>


      
    </Tab.Navigator>
   </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  escondido:{
    display: 'none'
  }
});
