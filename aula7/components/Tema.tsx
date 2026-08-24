import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Tema = () => {
    const [temaEscuro, setTema] = useState<boolean>(false)

    useEffect(() => {
        const escolherTema = async () => {
            const tema = await AsyncStorage.getItem('temaEscuro')

            if (tema) {
                setTema(tema === 'sim')
            }
        }
        escolherTema()
    }, [])

    const salvar = async (temaEscuro: boolean) => {
        const valor = temaEscuro ? 'sim' : 'não'

        await AsyncStorage.setItem('temaEscuro', valor)

        setTema(temaEscuro)
    }
    return (
        <View style={{gap: 10,
        backgroundColor:temaEscuro? 'black': 'white',
        padding: '100%'}}>

            <TouchableOpacity onPress={() => salvar(false)} style={{backgroundColor: temaEscuro?'white': 'black',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'}}>
                <Text style={{color: temaEscuro ? '#000000ff' : '#ffffffff'}}>
                    Tema claro
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => salvar(true)}style={{backgroundColor: temaEscuro? 'white': 'black',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'}}>
                <Text style={{color: temaEscuro ? '#000000ff' : '#ffffffff'}}>
                    Tema escuro
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Tema

const styles = StyleSheet.create({
    containerC: {
        gap: 10,
        backgroundColor: 'white',
        padding: '100%'
    },
    containerE: {
        gap: 10,
        backgroundColor: 'black',
        padding: '100%'
    },
    input: {
        borderWidth: 1,
        borderColor:  '#ccc',
        borderRadius: 8,
        padding: 10
    },
    botao: {
        backgroundColor: '#4ade9e',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        fontWeight: 'bold'
    },

    textoE:{
        color: 'white'
    },
    textoC:{
        color: 'black'
    }
})