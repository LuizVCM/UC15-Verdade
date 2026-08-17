import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CardProduto from './CardProduto'
import ListarProdutos from './ListarProdutos'


const produtos = [
    { id: '1', imagem: 'https://medicalfarma.com.br/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-26-at-17.22.22.jpeg', nome: 'alcool', preco: '1.99' },
    { id: '2', imagem: 'https://cdn.awsli.com.br/600x700/2538/2538906/produto/271710660/maca-argentina--1-unidade-aprox--200g--83orvw62e3.png', nome: 'maçã', preco: '13.70' },
    { id: '3', imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Gr%C3%A3o_de_arroz_arb%C3%B3rio.png', nome: '1 arroz', preco: '79.90' },
    { id: '4', imagem: 'https://http2.mlstatic.com/D_NQ_NP_922324-MLB107640592494_032026-O.webp', nome: '10 bananas', preco: '74.99' },
    { id: '5', imagem: 'https://m.media-amazon.com/images/I/71SKsFC012L._AC_UF894,1000_QL80_.jpg', nome: '1 bomba nuclear', preco: '5.00' }, { id: '6', imagem: 'https://tcdn.com.br', nome: 'café em grãos 1kg', preco: '45.90' },
    { id: '7', imagem: 'https://vtexassets.com', nome: 'leite integral 1l', preco: '4.89' },
    { id: '8', imagem: 'https://media-amazon.com', nome: 'fita isolante 20m', preco: '8.50' },
    { id: '9', imagem: 'https://tcdn.com.br', nome: 'detergente neutro 500ml', preco: '2.25' },
    { id: '10', imagem: 'https://vtexassets.com', nome: 'creme dental 90g', preco: '3.99' },
    { id: '11', imagem: 'https://media-amazon.com', nome: 'mouse sem fio usb', preco: '59.90' },
    { id: '12', imagem: 'https://gimba.com.br', nome: 'papel sulfite a4 500fls', preco: '28.40' },
    { id: '13', imagem: 'https://tcdn.com.br', nome: 'azeite de oliva 500ml', preco: '38.99' },
    { id: '14', imagem: 'https://cstrip.net', nome: 'chocolate em barra 90g', preco: '6.50' },
    { id: '15', imagem: 'https://awsli.com.br', nome: 'shampoo 400ml', preco: '19.80' },
    { id: '16', imagem: 'https://media-amazon.com', nome: 'garrafa térmica 1l', preco: '64.90' },
    { id: '17', imagem: 'https://convertiez.com.br', nome: 'sabonete em barra 90g', preco: '4.20' },
    { id: '18', imagem: 'https://mlcdn.com.br', nome: 'açúcar refinado 1kg', preco: '5.15' },
    { id: '19', imagem: 'https://media-amazon.com', nome: 'fone de ouvido p2', preco: '24.99' },
    { id: '20', imagem: 'https://tcdn.com.br', nome: 'biscoito recheado 130g', preco: '3.45' },
    { id: '21', imagem: 'https://tcdn.com.br', nome: 'amaciante concentrado 500ml', preco: '14.90' },
    { id: '22', imagem: 'https://media-amazon.com', nome: 'caderno espiral 10 matérias', preco: '22.30' },
    { id: '23', imagem: 'https://tcdn.com.br', nome: 'caixa caneta azul 50un', preco: '42.00' },
    { id: '24', imagem: 'https://vtexassets.com', nome: 'sal refinado 1kg', preco: '2.90' },
    { id: '25', imagem: 'https://media-amazon.com', nome: 'pilha alcalina aa c/ 4', preco: '18.99' },
    { id: '26', imagem: 'https://gimba.com.br', nome: 'clipe para papel 2/0 100un', preco: '5.20' },
    { id: '27', imagem: 'https://media-amazon.com', nome: 'extensão elétrica 3m', preco: '27.50' },
    { id: '28', imagem: 'https://tcdn.com.br', nome: 'desinfetante líquido 1l', preco: '11.40' },
    { id: '29', imagem: 'https://media-amazon.com', nome: 'carregador de parede usb-c', preco: '49.90' },
    { id: '30', imagem: 'https://vtexassets.com', nome: 'feijão carioca 1kg', preco: '8.75' },
    { id: '31', imagem: 'https://media-amazon.com', nome: 'calculadora científica', preco: '69.00' },
    { id: '32', imagem: 'https://tcdn.com.br', nome: 'óleo de soja 900ml', preco: '6.80' },
    { id: '33', imagem: 'https://media-amazon.com', nome: 'lâmpada led 9w bivolt', preco: '7.90' },
    { id: '34', imagem: 'https://vtexassets.com', nome: 'macarrão espaguete 500g', preco: '4.15' },
    { id: '35', imagem: 'https://media-amazon.com', nome: 'manta microfibra casal', preco: '55.00' },
    { id: '36', imagem: 'https://vtexassets.com', nome: 'esparadrapo impermeável', preco: '9.30' },
    { id: '37', imagem: 'https://media-amazon.com', nome: 'trena métrica 5m', preco: '16.50' },
    { id: '38', imagem: 'https://tcdn.com.br', nome: 'esponja de aço c/ 8', preco: '3.10' },
    { id: '39', imagem: 'https://media-amazon.com', nome: 'caneca de cerâmica 330ml', preco: '18.00' },
    { id: '40', imagem: 'https://vteximg.com.br', nome: 'milho para pipoca 500g', preco: '5.70' },
    { id: '41', imagem: 'https://media-amazon.com', nome: 'garrafa de água inox 750ml', preco: '42.90' },
    { id: '42', imagem: 'https://vtexassets.com', nome: 'algodão em bolas 50g', preco: '6.20' },
    { id: '43', imagem: 'https://media-amazon.com', nome: 'bloco de notas adesivas', preco: '11.90' },
    { id: '44', imagem: 'https://vtexassets.com', nome: 'farinha de trigo 1kg', preco: '5.40' },
    { id: '45', imagem: 'https://media-amazon.com', nome: 'guarda-chuva automático', preco: '39.90' },
    { id: '46', imagem: 'https://tcdn.com.br', nome: 'papel higiênico f. dupla c/4', preco: '7.80' },
    { id: '47', imagem: 'https://media-amazon.com', nome: 'cadeado de latão 30mm', preco: '21.50' },
    { id: '48', imagem: 'https://cstrip.net', nome: 'caixa de bombom 250g', preco: '12.99' },
    { id: '49', imagem: 'https://media-amazon.com', nome: 'adaptador benjamim t', preco: '4.50' },
    { id: '50', imagem: 'https://vtexassets.com', nome: 'sabão em pó 800g', preco: '16.90' }

]


const Busca = () => {
    const [termo, setTermo] = useState('')
    const [encontrado, procurar] = useState(produtos)


    return (
        <View style={styles.td}>
            <View style={styles.container}>
                <Text style={styles.text}> Pesquise aqui:</Text>
                <TextInput style={styles.textInput} value={termo} placeholder='teste aqui' onChangeText={setTermo} />
                <TouchableOpacity style={styles.botao} onPress={() => procurar(produtos.filter((item) =>
                    item.nome.toLowerCase().includes(termo.toLowerCase())))}>
                    
                    <Text style={styles.text}>Procurar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.results}>
                <FlatList
                    data={encontrado}
                    numColumns={5}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardProduto id={Number(item.id)} nome={item.nome} imagem={item.imagem} preco={Number(item.preco)} />
                    )}
                />
            </ScrollView>
        </View>

    )
}

export default Busca

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 90,
        width: 1500,
        height: 200,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 30
    },
    textInput: {
        fontSize: 40,
        width: 500,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white'

    },
    botao: {
        backgroundColor: 'orange',
        padding: 20,

    },
    td: {
        gap: 100
    },
    results: {
        height: 600
    }

})