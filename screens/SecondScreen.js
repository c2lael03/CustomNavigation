import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {useEffect} from 'react'

export default function SecondScreen(route, navigation) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',close)
    return() => {
      BackHandler.removeEventListener('hardwarebackPress', close)
    }
  }, [])

  close = () => {
    navigation.goBack(null)
    return true
  }



  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Text>{route.params?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});