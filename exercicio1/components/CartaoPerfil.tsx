import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Teste{
       nome:string,
       imagem: string,
       descricao: string
}

const CartaoPerfil = ({nome, imagem, descricao}: Teste) => {
    return (
        <View style={styles.fundo}>
            <View style={styles.ajeitar}>
                <Image source={{ uri: imagem }} style={styles.imagem} />
                <Text style={styles.user} numberOfLines={2}>{nome}</Text>
            </View>
            <Text numberOfLines={2} style={styles.bio}>{descricao}</Text>
            <TouchableOpacity style={styles.btn}> 
                <Text style={styles.btnTexto}>
                    Seguir
                </Text>
                 </TouchableOpacity>
        </View>
    )
}

export default CartaoPerfil

const styles = StyleSheet.create({
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 100,
        margin:10

    },
    fundo: {
        backgroundColor: 'darkgreen',
        width: 350,
        height: 400,
        padding: 20,
        gap: 20,
        borderRadius: 20

    },
    ajeitar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        boxShadow: '0px 10px 15px gray',
        backgroundColor: 'white',
        opacity: 0.9
    },
    user:{
        fontWeight: '700',
        fontSize: 12
    },
    bio:{
        color: 'white'
},
btn:{
    backgroundColor: 'red',
    width: 100,
    height: 30,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    
},
btnTexto:{
    fontSize: 13,
    fontWeight: '700',

}
})