import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface Pokemon {
    imagem: string,
    nome: string,
}

const CardPokemon = ({imagem, nome}: Pokemon) => {
  return (
    <View style={styles.card}>
     <View style={styles.imagemContainer}>
  <Image
    source={{ uri: imagem }}
    style={styles.imagem}
  />
</View>
     <Text style={styles.txt}>{nome}</Text>
    </View>
  )
}

export default CardPokemon

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'rgba(233, 128, 0, 0.72)',
        height: 300,
        width: 300,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 40,
        boxShadow: '10px 10px black, inset 10px 10px rgba(0,0,0,0.6), inset -10px -10px 20px white ',
        margin:20
    },
    imagemContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',

    boxShadow: '8px 8px black',
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  txt:{
    fontSize: 30,
    fontWeight: '700'
  }
})