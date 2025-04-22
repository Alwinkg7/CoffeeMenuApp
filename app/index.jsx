import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import icedcoffee from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <ImageBackground 
        source={icedcoffee} 
        resizeMode="cover" 
        style={styles.image}
        blurRadius={1} // subtle blur for better text contrast
      >
        <View style={styles.content}>
          <Text style={styles.title}>Kochi Brew</Text>
          
          <View style={styles.buttonGroup}>
            <Link href="/menu" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Our Menu</Text>
              </Pressable>
            </Link>
            
            <Link href="/contact" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    color: '#6F4E37',
    fontSize: 36,
    fontWeight: '300', // thinner weight for minimalism
    letterSpacing: 1,
    marginBottom: 120,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 300, // prevents buttons from getting too wide
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingVertical: 14,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#D4A76A',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
})