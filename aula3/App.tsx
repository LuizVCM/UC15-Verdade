import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LigarDesligar from './components/LigarDesligar';
import Contador from './components/Contador';
import CampoNome from './components/CampoNome';
import Calculadora from './components/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculadora/>
    </View>
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
