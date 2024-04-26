import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/Colors';
import { Image } from 'expo-image';

const FormHeader = () => {
  return (
    <View style={styles.logoContainer}>
    <Image
      source={require('../assets/images/Logo-ZYN-White.png')}
      style={styles.logo}
    />
    <Text style={styles.title}>SIN HUMO, SIN TABACO ¡ZYN LÍMITES!</Text>
  </View>
  )
}

const styles = StyleSheet.create({

    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
    },
    logo: {
      width: 150,
      height: 50,
      marginBottom: 20,
    },
  
    title: {
      color: colors.NEUTRAL_WHITE,
      fontSize: 20,
      fontFamily: 'GothamNarrow-Light',
      textAlign: 'center',
    },
  })

export default FormHeader