import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'


const Perfil = () => {
  
  const [foto, setFoto] = useState<string>()

  const escolherDaGaleria = async () => {
    // launchImageLibraryAsync é um método assincrono que abre o seletor de fotos do celular
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // diz que tipo de arquivos pode abrir (imagens, videos, os dois juntos)
      allowsMultipleSelection: true, // permite varias fotos
      selectionLimit: 5, // Qauntas fotos no maximo
      allowsEditing: false, // permite recortar a imagem antes de confirmar
      aspect: [1,1], // proporção do recorte, quando allowsEditing é ture
      quality: 0.8 // qualidade da imagem, de 0 a 1, quanto menos, menor o tamanho do arquivo
    })
    // se confirmar 
    if (!resultado.canceled) {
        const uris = resultado.assets.map((item) => item.uri);
        setFotos(uris)  
        // o caminho da imagem escolhida, que a gente pode colocar dentro de um <image source{{uri}}/>
    }
  }
      

  const tirarFoto = async () => {
    // função assincrona do imagePicker que pede permissão ao usuário
    const { status } = await ImagePicker.requestCameraPermissionsAsync()

    if (status != 'granted') {
        Alert.alert('Permissão é nesscessária para continuar, seu burro, seu animal de teta, chinelão!')
        return
    }

    const resultado = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'], // diz que tipo de arquivos pode abrir (imagens, videos, os dois juntos)
        allowsEditing: true, // permite recortar a imagem antes de confirmar
        quality: 0.8 // qualidade da imagem, de 0 a 1, quanto menos, menor o tamanho do arquivo
    })
    if (!resultado.canceled){
        setFoto(resultado.assets[0].uri)
    }
  }

  return (
    
    <View style={styles.container}>
        <Text style={styles.titulo}> Cadastrar novo usuário: </Text>
      <TouchableOpacity onPress={escolherDaGaleria}>
        <Text>Escolher foto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tirarFoto}>
        <Text>Tirar foto</Text>
      </TouchableOpacity>
      {foto && <Image source={{uri:foto}} style={styles.preview}/>}
    </View>
  );
}

export default Perfil

const styles = StyleSheet.create({
    preview:{

    },
    container:{
        alignItems: 'center',
        gap: 20

    },
    titulo:{
        fontSize: 30,
        fontWeight: '600'
    }
})