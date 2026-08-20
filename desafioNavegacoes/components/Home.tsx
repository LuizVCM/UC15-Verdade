import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React, { useEffect, useState } from 'react'
import CardFilme from './CardFilme'

const ListaFilmes = ({ navigation }: any) => {

    const [nome, setNome] = useState<string>('')
    const [encontrados, setEncontrado] = useState<string>('')
    const [filmes, setFilmes] = useState<any[]>([])

    useEffect(() => {

        async function filme() {

            try {

                const resposta = await fetch(
                    "https://api.tvmaze.com/shows"
                )

                const filme = await resposta.json()

                // Aqui está o array de objetos da API
                setFilmes(filme)

            } catch (erro) {

                console.log(
                    "Erro ao puxar dados da API",
                    erro
                )
            }
        }

        filme()

    }, [])
      
    // Procura pelo nome dentro de cada objeto
    const dados = filmes.filter((item) => item.name.toLowerCase().includes(encontrados.toLowerCase())
)

    return (

        <View style={styles.agrupar}>

            <View style={styles.pesquisa}>

                <TextInput
                    value={nome}
                    placeholder="procurar filme"
                    onChangeText={setNome}
                    style={[styles.txt, styles.input]}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => setEncontrado(nome)}
                >
                    <Text style={styles.txt}>
                        Procurar
                    </Text>
                </TouchableOpacity>

            </View>

            <FlatList
                style={styles.pkmns}
                data={dados}
                numColumns={1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <CardFilme
                        id={item.id}
                        nome={item.name}
                        genero={item.genres[0]}
                        imagem={item.image?.medium}
                    />

                )}
            />

        </View>
    )
}

export default ListaFilmes

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
        backgroundColor: 'rgba(24, 24, 31, 1)',
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
        backgroundColor: 'rgba(51, 51, 51, 0.5)',

    },

    pkmns: {
        width: '100%',
        height: '100%',
        gap: 40
    }
})