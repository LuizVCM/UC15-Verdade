import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardUsuario from './CardUsuario'

const dadosUsuario = [
    { id: '1', nome: 'Luiz', email: 'luiz@gmail' },
    { id: '2', nome: 'marcos', email: 'marquinhosdograu@gmail' },
    { id: '3', nome: 'coroneu marrocos', email: 'suiçaexplodida@gmail.com' },
    { id: '4', nome: 'td', email: 'nd' },
    { id: '5', nome: 'nunca', email: 'nunca' },
    { id: '6', nome: 'sempre', email: 'sempre' },
    { id: '7', nome: 'nd', email: 'td' },
    { id: '1', nome: 'Luiz', email: 'luiz@gmail' },
    { id: '2', nome: 'marcos', email: 'marquinhosdograu@gmail' },
    { id: '3', nome: 'coroneu marrocos', email: 'suiçaexplodida@gmail.com' },
    { id: '4', nome: 'td', email: 'nd' },
    { id: '5', nome: 'nunca', email: 'nunca' },
    { id: '6', nome: 'sempre', email: 'sempre' },
    { id: '7', nome: 'nd', email: 'td' },


]
// O componente FlatList renderiza os dados de forma dinâmica 
// Ou seja, ele lê dados do banco ou de um array, por exemplo,
// e consegue criar cards com esses dados, sem precisarmos criar um por um na mão
const ListaUsuarios = () => {
    return (
        <ScrollView>
            <FlatList
                data={dadosUsuario} // de onde ele importa os dados
                keyExtractor={(item) => item.id} // identifica qual a chavr que diferencia cada item
                renderItem={({ item }) => (
                    <CardUsuario id={Number(item.id)} nome={item.nome} email={item.email} />
                )}

            />
        </ScrollView>
    )
}

export default ListaUsuarios

const styles = StyleSheet.create({})