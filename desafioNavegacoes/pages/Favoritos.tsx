import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'

import React, { useEffect, useState } from 'react'

import CardFilme from '../components/CardFilme'

import { useFavoritos } from '../components/Favoritar'


const Favoritos = () => {

    const { favoritos } = useFavoritos()

    const [filmes, setFilmes] = useState<any[]>([])
    useEffect(() => {
        async function buscarFavoritos() {

            try {

                const resultados = await Promise.all(
                    favoritos.map(async (id) => {

                        const resposta = await fetch(
                            `https://api.tvmaze.com/shows/${id}`
                        )
                        return await resposta.json()
                    })
                )
                setFilmes(resultados)

            } catch (erro) {

                console.log(
                    'Erro ao buscar favoritos:',
                    erro
                )
            }
        }
        buscarFavoritos()

    }, [favoritos])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Meus favoritos
            </Text>
            {filmes.length === 0 ? (
                <Text style={styles.vazio}>
                    Nenhum filme favoritado.
                </Text>
            ) : (
                <FlatList
                    data={filmes}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                    renderItem={({ item }) => (
                        <CardFilme
                            id={item.id}
                            nome={item.name}
                            genero={item.genres}
                            imagem={item.image?.medium}
                        />

                    )}
                />

            )}

        </View>
    )
}


export default Favoritos


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#232230',
        padding: 20
    },

    titulo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },

    vazio: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50
    }

})