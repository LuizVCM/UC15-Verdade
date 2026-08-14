import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardPokemon from './CardPokemon'


const Buscar = () => {

    const [nome, setNome] = useState<string>('')
    const [pokemons, setPokemons] = useState<any[]>([])

     
    useEffect(() => {
        async function buscarPokemons() {
            try {
                const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/")

                const k = await resposta.json()
                setPokemons(k.results)

                

            } catch (erro) {
                console.log("Erro ao puxar dados da API", erro) 
            }
        }

        buscarPokemons()
        
       
    }, [])

const dados =  pokemons.filter((item) => item.name.toLowerCase().includes(nome.toLowerCase())) 

      

    return (
        <View style={styles.agrupar}>
            <View style={styles.pesquisa}>
                <Text style={styles.txt}> Pesquisar nome de pokemon: </Text>
                <TextInput value={nome} placeholder='Escreva o pokemon aqui' onChangeText={setNome} style={[styles.txt, styles.input]} />
                <TouchableOpacity style={styles.botao} onPress={() => setPokemons(dados)}>

                    <Text style={styles.txt}>Procurar</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>{dados}</Text>
            </View>

            <ScrollView style={styles.pkmns}>
                <FlatList
                    data={nome}
                    numColumns={5}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <CardPokemon nome={item} imagem={item} />
                    )}
                />

            </ScrollView>
        </View>
    )
}

export default Buscar

const styles = StyleSheet.create({
    agrupar: {
        backgroundColor: 'rgba(35, 34, 48, 1)',
        width: "100%",
        height: '100%'
    },
    pesquisa: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 30

    },
    botao: {
        backgroundColor: 'brown',
        padding: 15,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    txt: {
        fontSize: 30,
        color: 'white',
        fontWeight: '700'
    },
    input: {
        padding: 20,
        backgroundColor: 'rgba(151, 130, 130, 0.5)',
        borderWidth: 2,
        borderColor: 'orange'
    },
    pkmns: {
        width: '90%',
        height: '100%',
        padding: 50
    }
})