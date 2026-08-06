import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface teste {
card: string,
idade: number
}

const Card = ({card, idade}:teste) => {
  return (
    <View>
      <Text>teste {card} {idade}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})