import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Exemplo1 = () => {
    const [contador, setContador] = useState<number>(0)
    const [outroContador, setOutroContador] = useState<number>(0)

    useEffect(()=>{
      console.log("O componente foi renderizado!!!!!!!!")
    }, [contador])
  return (
    <View>
      <Text>contador: {contador}</Text>
      <Text>outro contador: {outroContador}</Text>
      <Text onPress={() => setContador(contador+ 1)}>➕ Clique para mudar o contador</Text>
      <Text onPress={() => setOutroContador(outroContador+ 1)}>➕ Clique para mudar o outro contador</Text>
    </View>
  )
}

export default Exemplo1

const styles = StyleSheet.create({})