import { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Marker, Region } from 'react-native-maps'
import * as Location from 'expo-location'

const MapaUsuario = () => {
  const [regiao, setRegiao] = useState<Region | null>(null)

  useEffect(() => {
    const carregar = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return

      const posicao = await Location.getCurrentPositionAsync({})
      setRegiao({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })
    }
    carregar()
  }, [])

  if (!regiao) {
    return <ActivityIndicator size="large" style={styles.loading} />
  }

  return (
    <MapView
      style={styles.mapa}
      initialRegion={regiao}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{ latitude: regiao.latitude, longitude: regiao.longitude }}
        title="Você está aqui"
      />
    </MapView>
  )
}

export default MapaUsuario

const styles = StyleSheet.create({
  mapa: { flex: 1, backgroundColor: 'black'},
  loading: { flex: 1, backgroundColor: 'green' },
  
})