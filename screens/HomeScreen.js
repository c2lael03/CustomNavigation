
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Alla lisäys
import React, { useLayoutEffect } from 'react'
import Ionicon from '@expo/vector-icons/Ionicons'

export default function HomeScreen({navigation}) {
  const [message, setMessage] = useState('Testing')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons 
        name="arrow-forward" 
        size={24} 
        onPress={() => navigation.navigate('Second', {message: message})} 
        />
      )
    })
  })

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput value={message} onChangeText={text => setmessage(text)} />
    </View>
  );
}

const styles = StyleSheet.create
({
  container: {
    paddin: 10,
  }
});