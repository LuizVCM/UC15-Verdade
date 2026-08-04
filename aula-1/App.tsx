
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cartao from './components/Cartao';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Cartao />
          <Cartao />
          <Cartao />

          <Cartao />
          <Cartao />

          <Cartao />
          <Cartao />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }

});
