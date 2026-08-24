import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'

const CHAVE_FOTO = '@app:foto_perfil'

const FotoPerfil = () => {
    const [foto, setFoto] = useState<string>('')
     useEffect(() => {
        // carrega dados salvos no armazenamento interno 
        const carregar = async() => {
            //getItem procura um itemsalvo na memória que tenha a imagem indicado
            const salvo = await AsyncStorage.getItem(CHAVE_FOTO)
            // se existir 
            if(salvo){
                setFoto(salvo)
            }
        }
        carregar()
     }, [])

     const escolherFoto = async () => {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.8
        })
          // se eu escolhi a foto
        if(!resultado.canceled){
            const uri = resultado.assets[0].uri // pega a uri da foto
            setFoto(uri)
            await AsyncStorage.setItem(CHAVE_FOTO, uri) // salvo o caminho da foto no async storage
        }
     }

  return (
    <View style={styles.container}>
        {foto ? (
            <Image source={{uri: foto}} style={styles.foto}/>
        ) : (
            <View style={styles.placeholder}/>
        )
    }

      

      <TouchableOpacity style={styles.botao} onPress={() => escolherFoto()}> 
        <Text style={styles.botaoTexto}>Trocar foto</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FotoPerfil

const styles = StyleSheet.create({
  
    placeholder: {
        width: 120, 
        height: 120, 
        borderRadius: 60, backgroundColor: 'gray'
    },
    foto: {
        width: 120, 
        height: 120,
        borderRadius: 60
    },
    container: {
        alignItems: 'center',
        gap: 10
    },
    botao:{
        backgroundColor: 'blue',
        padding: 12, 
        borderRadius: 10, 
        alignItems: 'center',
    },
    botaoTexto:{
        fontSize: 30
    }
})