import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Button  } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'



const Perfil = () => {

    const [foto, setFoto] = useState<string>()
    const [nome, setNome] = useState<string>()
 const escolherDaGaleria = async () => {
        // launchImageLibraryAsync é um método assincrono que abre o seletor de fotos do celular
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], // diz que tipo de arquivos pode abrir (imagens, videos, os dois juntos)
            allowsMultipleSelection: true, // permite varias fotos
            selectionLimit: 5, // Qauntas fotos no maximo
            allowsEditing: false, // permite recortar a imagem antes de confirmar
            aspect: [1, 1], // proporção do recorte, quando allowsEditing é ture
            quality: 0.8 // qualidade da imagem, de 0 a 1, quanto menos, menor o tamanho do arquivo
        })
        // se confirmar 
        if (!resultado.canceled) {
            setFoto(resultado.assets[0].uri)
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
        if (!resultado.canceled) {
            setFoto(resultado.assets[0].uri)
        }
    }
         const enviado =Alert.alert("Usuário enviado com sucesso!!!")
    return (

        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastrar novo usuário: </Text>
            <TouchableOpacity onPress={escolherDaGaleria}>
                <Text>Escolher foto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={tirarFoto}>
                <Text>Tirar foto</Text>
            </TouchableOpacity>
            {foto && <Image source={{ uri: foto }} style={styles.preview} />}

            <TextInput value={nome} placeholder='Digite aqui o seu usuário' style={styles.nome}/>
            <Button title='Enviar' onPress={() => enviado}/>
        </View>
    );
}

export default Perfil

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: '600'
    },

    container: {
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 150,
        gap: 20
    },
    preview: {
        width: 200,
        height: 200,
        borderRadius: "100%"
    },
    nome:{
        height: 50,
        padding:20,
        borderWidth: 1,
    }
})