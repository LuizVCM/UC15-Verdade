import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreen } from 'react-native-screens';
import Home from './pages/Home';
import Profile from './pages/Profile';

// cria o objeto da navegação
// neste caso, navegação por pilhas (stack)
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // container que envolve toda a navegação
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>


       </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
