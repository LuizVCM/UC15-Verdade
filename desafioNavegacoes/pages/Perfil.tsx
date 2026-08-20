    import { StyleSheet, Text, View, Image } from 'react-native'
    import React from 'react'
    
    const Perfil = () => {
      return (
        <View style={styles.container}>
         <View style={styles.imagem}>
          <Image style={styles.imagem} source={{uri: 'https://images.pexels.com/photos/35894361/pexels-photo-35894361/free-photo-of-retrato-lateral-em-preto-e-branco-de-homem-barbudo.jpeg?cs=tinysrgb&dpr=1&w=500'}}/>
         </View>
        </View>
      )
    }
    
    export default Perfil
    
    const styles = StyleSheet.create({
      imagem:{
        width: 500,
        height: 500,
        borderRadius: "100%",
        backgroundColor: 'black',
      },
      container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }
    })