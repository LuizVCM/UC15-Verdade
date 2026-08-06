import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LigarDesligar = () => {

    const [valor1, setValor] = useState("desligado")
    const [valor2, setValor2] = useState('ligar')

    
    return (
        <View style={styles.view}>
            <Text style={styles.text}>situação: {valor1} </Text>
            <TouchableOpacity style={styles.botao} onPress={() => { if (valor2 === 'desligar') { setValor2('ligar') } else { setValor2('desligar') } if (valor1 === 'desligado') { setValor('ligado') } else { setValor('desligado') } }}>
                <Text style={styles.text}> {valor2} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LigarDesligar

const styles = StyleSheet.create({
    botao: {
        boxShadow: '2px 10px 10px black',
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        fontWeight: '700'
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,

    },
    text: {
        fontSize: 40,
    }
})