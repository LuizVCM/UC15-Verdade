import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagemC}>
        <Image style={styles.imagem} source={{ uri: 'https://images.pexels.com/photos/35894361/pexels-photo-35894361/free-photo-of-retrato-lateral-em-preto-e-branco-de-homem-barbudo.jpeg?cs=tinysrgb&dpr=1&w=500' }} />
      </View>

      <View style={styles.textos}>
        <View>
        <Text style={styles.selecao}>Nome: </Text>
        <Text style={styles.nome}>Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Bourbon</Text>
        </View>
        <View>
          <Text style={styles.selecao}>Email: </Text>
        <Text style={styles.email}> pedro.alcantara.joao.carlos.leopoldo.salvador.bibiano.francisco.xavier.de.paula.leocadio.miguel.gabriel.rafael.gonzaga.braganca@imperio.gov.br</Text>
        </View>
        <View>
          <Text style={styles.selecao}>Descrição: </Text>
        <Text style={styles.descricao}> "Fui coroado aos quatorze anos, sacrificando minha infância para carregar uma coroa que eu nunca pedi. Meu verdadeiro amor era a ciência e os livros, não o luxo ou o poder da corte. Embora tenha tentado modernizar o Brasil, o sistema político atrasou os meus maiores desejos, como o fim imediato da escravidão. No fim, fui banido do país que amava, levando comigo apenas um punhado de terra brasileira para o exílio."</Text>
        </View>

        
      </View>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  imagem: {
    width: 400,
    height: 400,
    borderRadius: "100%",
    backgroundColor: 'black',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 50,
    backgroundColor: 'rgba(20, 21, 31, 1)',
  },
  descricao:{
   fontSize: 13,
   color: 'white'
  },
  selecao:{
    color: 'orange',
    fontSize: 20,
    fontWeight: '700',

  },
  textos:{
width: '60%',
gap: 30,

  },
  nome:{
    fontSize: 30,
    color: 'white',
    fontWeight: '700'
  },
  imagemC:{

  },
  email: {
    fontSize: 15,
    color: 'white'
  }
})