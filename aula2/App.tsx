import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PerfilCard from './components/PerfilCard';
import CardProduto from './components/CardProduto';

export default function App() {
  return (
    <View style={styles.container}>
      <CardProduto nome='Arroz'valor={23.34} imagem="https://tempodecozimento.com.br/wp-content/uploads/2023/12/Arroz.png" />
      <CardProduto nome='carne' valor={15.99} imagem='https://tdc01z.vteximg.com.br/arquivos/ids/159402-1000-1000/17099-patinho-bovino-pecapedaco.png?v=637897728562430000' />
      <CardProduto nome='formiga' valor={1.99} imagem='https://png.pngtree.com/png-clipart/20240903/original/pngtree-an-ant-closeup-view-in-transparent-background-png-image_15922154.png' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
    flexDirection: 'row'
  },
});
