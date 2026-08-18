import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}: any) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
      title='Ir para Home'
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})