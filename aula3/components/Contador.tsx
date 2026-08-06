import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Contador = () => {
  const [contador, setContador] = useState<number>(0)

  return (
    <View style={styles.linha}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador - 1)}
      >
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>

      <Text style={styles.numero}>{contador}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador + 0.000000000000000000000000000000000000000000000000000000001)}
      >
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contador

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  botao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4ade9e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: { fontSize: 20, fontWeight: 'bold' },
  numero: { fontSize: 24, fontWeight: 'bold', minWidth: 36, textAlign: 'center' },
})