import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cartao = () => {
  return (
    <ScrollView style={styles.container}> 
    <Image source={require('../assets/favicon.png')}/>
      <Text numberOfLines={5} style={styles.titulo} ellipsizeMode='middle' onPress={() => {alert("teste aqui")}} selectable={true}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos numquam ex expedita dolore dolorem modi illo similique, quod maxime explicabo. Minus dicta aliquid est quasi molestias, harum culpa rem laboriosam!</Text>
     
     <TouchableOpacity style={styles.btn}>
      <Text>Clique aqui</Text>
     </TouchableOpacity>
      
    </ScrollView>
  )
}

export default Cartao

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightblue',
        padding: 50,
        color: 'purple',
        fontSize: 5,
        fontWeight: 800,
        gap: 20,
        boxShadow:'inset 5px 20px 30px darkgreen, inset -5px -10px black',
        

    },
    titulo:{
        fontSize: 22,
        padding: 10,
        margin: 5,
        fontWeight: '700',
        color: 'black',

    },
    btn:{
      color: 'black',
      padding: 10,
      backgroundColor: 'yellow',
      alignItems: 'center',

    }
})