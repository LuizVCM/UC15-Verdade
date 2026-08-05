import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App() {
  return (
    
    <View style={styles.container}>
     <CartaoPerfil nome="Usuário 2.0" imagem="https://images.steamusercontent.com/ugc/988988721313535308/D2B396F36BD3DA47DE566F96B262D3C9120EB8FF/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" descricao='Vou ser o herói n° 1'/>
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
