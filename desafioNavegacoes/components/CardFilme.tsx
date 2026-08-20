import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useFavoritos } from '../components/Favoritar'


interface informacoes {
  id: string
  nome: string,
  imagem: string,
  genero: [],
}





const CardFilme = ({ id, nome, imagem, genero }: informacoes) => {
  const navigation: any = useNavigation()

  const {
    adicionarFavorito,
    removerFavorito,
    ehFavorito
  } = useFavoritos()

  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
      </View>
      <View style={styles.dados}>
        <Text style={styles.txt}>Nome: {nome}</Text>
        <Text style={styles.txt}> Gênero: {genero}</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Infos', {
              id: id
            })
          }}>
            <Text style={styles.txtbtn}>Ver detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {
            if (ehFavorito(Number(id))) {
              removerFavorito(Number(id))
            } else {
              adicionarFavorito(Number(id))
            }
          }}>
            <Text style={styles.txtbtn}>
              {ehFavorito(Number(id)) ? 'salvo' : 'favoritar'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CardFilme

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: "95%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 30,
    flexDirection: 'row'

  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    gap: 60,
  },
  imagem: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30
  },
  dados: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    padding: 20,
    boxShadow: 'inset 0 0 10px white',

  },
  txt: {
    fontSize: 20,
    width: '100%',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'calibri',
    textShadowColor: 'white',
    textShadowRadius: 5

  },
  btn: {
    width: '40%',
    padding: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  txtbtn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '600',

  }
})