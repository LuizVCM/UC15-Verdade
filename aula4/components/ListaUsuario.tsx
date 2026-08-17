import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListaUsuario = () => {

   const [usuario, setUsuarios] = useState<any[]>([])
   useEffect(() => {
    const buscarUsuario = async () => {
        try{
          console.log("Buscando dados da API...")
          // GET dos dados de user da API JsonPlaceHolder
          const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

          // converte para algo qyue possamos usar com TS
          const dados = await resposta.json()

          // usuario, nosso array criado lá em cima, recebe esses dados
          setUsuarios(dados)
        }catch(erro){
         console.log("Deu ruim gurizada: ", erro)
        }
    };

    buscarUsuario()
   }, [])

  return (
    <View>
      <FlatList
         data = {usuario}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({item}) => (
            <Text>Nome: {item.name} Email: {item.email}</Text>
         )}
      />
    </View>
  )
}

export default ListaUsuario

const styles = StyleSheet.create({})