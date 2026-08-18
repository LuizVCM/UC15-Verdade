import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.imagem}>
        <Image source={{uri: 'https://ssintgrading.com/cdn/shop/articles/pokemon_8c0330ed-fd04-4da7-aab2-4dbed4e7c177.gif?v=1748439233'}} style={styles.imagem}/>
      </View>
      <View style={styles.btns}>
        <Button title='lista de pokemons' onPress={() => navigation.navigate('Buscar')}/>

        <Button title='configuração'/>

      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  imagem:{
    marginLeft: '5%',
    width: "80%",
    height: "80%",
    backgroundColor: 'black',
    filter: 'contrast(120%) blur(1px)',
    
    
  },
  btns:{
    height: '20%',
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    gap: "20%",
    top: -150

  },
  container:{
    alignItems:'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black'
    
  }
})