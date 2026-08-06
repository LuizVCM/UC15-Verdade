import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Calculadora = () => {

    interface numeros{
        valor1: string,
        valor2: string,
        result: number
    }

    function calcularSoma({valor1, valor2}:numeros){
         const resultSoma =  Number(valor1) + Number(valor2)
    }
     function calcularSubtracao({valor1, valor2}:numeros){
         const resultSoma =  Number(valor1) + Number(valor2)
    }
     function calcularMultiplicacao({valor1, valor2}:numeros){
         const resultSoma =  Number(valor1) + Number(valor2)
    }
     function calcularDivisao({valor1, valor2}:numeros){
         const resultSoma =  Number(valor1) + Number(valor2)
    }

    const [valor1, setNumber1] = useState('')
    const [valor2, setNumber2] = useState('')
    const [result, setResult] = useState(0)
    
  return (
    <View style={styles.td}>
     <TextInput
     value={valor1}
     style={styles.n1}
     onChangeText={setNumber1}
     placeholder='Digite o primeiro número'
     />

     <TextInput
     value={valor2}
     style={styles.n2}
     onChangeText={setNumber2}
     placeholder='Digite o primeiro número'
     />
     <View style={styles.buttons}> 
        <TouchableOpacity style={styles.btn} onPress={() => setResult(Number(valor1) + Number(valor2))}>
           <Text> Somar </Text>
        </TouchableOpacity>
     </View>
     <View style={styles.resultsss}>
        <Text> Resultado: {result}</Text>

     </View>
    </View>
    
  )
}

export default Calculadora

const styles = StyleSheet.create({
td:{
gap: 10,
backgroundColor: 'orange'
},
n1:{
    backgroundColor: 'yellow'
},
btn:{
    backgroundColor:'white'
},
n2:{
    backgroundColor: 'yellow'
},
buttons:{

},
resultsss:{
    
}


})