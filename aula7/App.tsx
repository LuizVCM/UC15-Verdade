import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CampoNome from './components/CampoNome';
import FotoPerfil from './components/FotoPerfil';
import Tema from './components/Tema';

export default function App() {
  return (
    <View style={styles.container}>
<Tema/>
      
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
