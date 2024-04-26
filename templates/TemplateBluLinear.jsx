import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Animated } from 'react-native';

const TemplateBluLinear = ({ children }) => {
  return (
    <>
            <LinearGradient
                colors={['#00A9E0', '#041D75']}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}>
                {children}
            </LinearGradient>

        </>

  )
}

const styles = StyleSheet.create({
  
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TemplateBluLinear