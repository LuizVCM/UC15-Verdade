import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CartaoPerfil = () => {
    return (
        <View style={styles.fundo}>
            <View style={styles.ajeitar}>
                <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVtZXxlbnwwfHwwfHx8MA%3D%3D' }} style={styles.imagem} />
                <Text style={styles.user} numberOfLines={2}>SupremoPrimata@primata2.0</Text>
            </View>
            <Text numberOfLines={2} style={styles.bio}>"Aqui se encontra o primeiro usuário da primeira rede social daqui da selva 🌴🌴🌴🌴"</Text>
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