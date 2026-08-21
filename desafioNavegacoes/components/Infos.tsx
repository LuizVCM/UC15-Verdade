import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'

interface Filme {
  id: number
  name: string
  image?: {
    medium: string
    original: string
  }
  summary: string,
  genres: string
  premiered: string,
  rating:{
    average: number
  }

}

const Infos = ({ route, navigation }: any) => {
  const { id } = route.params

  const [filme, setFilme] = useState<Filme | null>(null)

  useEffect(() => {
    async function buscarFilme() {
      try {

        const resposta = await fetch(
          `https://api.tvmaze.com/shows/${id}`
        )

        const dados = await resposta.json()
        setFilme(dados)

      } catch (erro) {

        console.log(
          'Erro ao buscar filme:', erro
        )
      }
    }
    buscarFilme()

  }, [id])

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text style={styles.carregando}>
          sem filme
        </Text>
      </View>
    )
  }
  return (

    <View style={styles.container}>
      <View style={styles.agrupar1}>
        <TouchableOpacity onPress={() => navigation.navigate('Início')} style={styles.btn}>
          <Text style={styles.txt}>Voltar</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: filme.image?.original }}
          style={styles.img}
        />
      </View>

      <View style={styles.agrupar2}>
        <Text style={styles.nome}>
          {filme.name}
        </Text>
        <View style={styles.agrupar3}>
        <Text style={styles.elements}>Nota:  {filme.rating?.average}</Text>
                <Text style={[styles.elements, styles.cor1]}>Ano de lançamento:  {filme.premiered}</Text>
                <Text style={styles.elements}> Gênero: {filme.genres[0]}</Text>
</View>
        <Text style={styles.descricao}>
          {filme.summary
            ?.replace(/<[^>]*>/g, '')}  {/** Isso tinha q ser feito pq antes eu eliminava algumas tags, mas nn em td lugar */}
        </Text>
      </View>
    </View>
  )
}

export default Infos


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#232230',
    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    gap: 50
  },
elements:{
  fontSize: 20,
  color: 'rgba(255, 204, 136, 1)',
  fontWeight: '700'
},
  img: {
    width: 450,
    height: 600,
    resizeMode: 'cover',
    borderRadius: 15,
    backgroundColor: 'black'
  },
  agrupar1: {
    flexDirection: 'column',
    gap: 40
  },

  agrupar2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    width: '70%',
    gap: 60
  },
  cor1: {
    color: 'rgba(155, 202, 255, 1)',
    textShadowColor: 'blue',
    textShadowRadius: 10
  },
agrupar3:{
 flexDirection: 'row',
 width: '100%',
 gap: 40,
},
  txt: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
  },

  btn: {
    backgroundColor: 'orange',
    padding: 20,
    width: 450,
    alignItems: 'center',
    justifyContent: 'center'

  },
  nome: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    width: "100%"
  },

  genero: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },

  descricao: {
    color: 'white',
    fontSize: 17,
    marginTop: 20,
    textAlign: 'justify'
  },

  carregando: {
    color: 'white',
    fontSize: 25
  }

})