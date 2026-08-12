import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LigarDesligar from './components/LigarDesligar';
import Contador from './components/Contador';
import CampoNome from './components/CampoNome';
import Calculadora from './components/Calculadora';
import ListaUsuarios from './components/ListaUsuarios';
import ListarProdutos from './components/ListarProdutos';
import Busca from './components/Busca';

export default function App() {
  return (
    <View style={styles.container}>
          <Busca/>
    
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100
  },
});
