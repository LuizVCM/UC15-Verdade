import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo1 from './components/exemplo1';
import Exemplo2 from './components/Exemplo2';
import ListaUsuario from './components/ListaUsuario';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaUsuario/>
      <StatusBar style="auto" />
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
