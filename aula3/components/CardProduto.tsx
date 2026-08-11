import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface ListarProduto {
    id: number,
    imagem: string,
    nome: string,
    preco: number
}

const CardProduto = ({id, imagem, nome, preco}: ListarProduto) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imagem}} style={styles.imagem}/>
      <Text style={styles.texto}>Identificador: {id}</Text>
      <Text style={styles.texto}>Título: {nome}</Text>
      <Text style={styles.texto1}>Preço: {preco}</Text>

    </View>
  )
}

export default CardProduto

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        gap: 15,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '6px 12px black, inset 6px 12px 25px white'
    },
    imagem:{
        backgroundColor: 'black',
        width: 120,
        height: 100,
        borderRadius: 10,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1

    },
    texto:{
        fontSize:20,
        fontWeight: '600'
    },
    texto1:{
        padding: 10,
        backgroundColor:'white',
        fontSize: 15,
        fontWeight: '800'
    }

})