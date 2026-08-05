import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// 1 - Criar uma interface com as propriedades e tipos delas
interface PerfilCardProp{
    nome: string
}

// 2 - dentro dos parênteses, usando desestruturação de objetos, colocamos todos os props que queremos e tipamos como a iinterface que criamos
const PerfilCard = ({nome}: PerfilCardProp) => {
  return (
    <View>
        {/*3- Chamamos os props pelo nome sempre que precisarmos */}
      <Text style={styles.texto}>Olá, {nome}</Text>
    </View>
  )
}

export default PerfilCard

const styles = StyleSheet.create({
    texto:{
        fontSize: 50
    }
})