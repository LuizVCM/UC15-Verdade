import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ProdutoCard {
    nome: string,
    valor: number,
    imagem: string
}
const CardProduto = ({nome, valor, imagem}: ProdutoCard) => {
  return (

    <View style={styles.container}>
        <Image style={styles.imagem} source={{uri: imagem}}/>
      <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.preco}>{valor}</Text>
    </View>
  )
}

export default CardProduto

const styles = StyleSheet.create({
texto:{
    fontSize: 20,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    color: "white",
    
},
precoPreco:{
     fontSize: 20,
    fontWeight: '700',
    marginLeft: 20
},
container:{
    backgroundColor: 'yellow',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 30,
    padding: 60,
    boxShadow: '10px 4px 20px black',
    borderRadius: 30

    
},
imagem:{
    borderRadius: '100%',
    width: 120,
    height: 120,
    borderColor: 'black',
    backgroundColor: 'black',
    margin: 15
},
preco:{
    fontSize: 20,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    color: "white",
    marginLeft: 10
    
},
nomeNome:{
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20
},
imagemNome:{
    fontSize:20,
    fontWeight: '700'

}

})